import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  HttpErrors,
} from '@loopback/rest';
import {User , UserCredentials, Basket, IshopItem, Cart } from '../models';
import {UserRepository, BasketRepository, CartRepository} from '../repositories';
import {NewUserRequestSchema} from './userSchema/new.user.schema';
import { UserCredentialsServiceBindings , UserLoginServiceBindings ,
   UserSignupServiceBindings , JWTTokenServiceBindings } from '../bindings/application.bindings';
import { inject } from '@loopback/context';
import { UserService , TokenService , authenticate } from '@loopback/authentication';
import {UserCredentialsType} from '../types/user.credentials.type';
import { SignupService } from '../services/signup.service';
import { UserCredentialsInterface } from '../interfaces/user-credentials-interface';
import { OPERATION_SECURITY_SPEC } from '../utils/security-spec';
import { UserProfileSchema  } from '../utils/schema-spec';
import {UserProfile, securityId, SecurityBindings} from '@loopback/security';
import _ from 'lodash';
import { service } from '@loopback/core';
//import { ItemRepository } from '../repositories/item.repository';
import { Item } from '../models/item.model';
import { Utils } from '../utils/systemUtils';
const ObjectId = require('mongodb').ObjectId;

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository : UserRepository,
    @inject(UserCredentialsServiceBindings.USER_SERVICE) public userCredentialsService : any,
    @inject(UserLoginServiceBindings.LOGIN_SERVICE) public loginService : UserService<User, UserCredentialsType>,
    @inject(UserSignupServiceBindings.SIGNUP_SERVICE) public signupService : UserCredentialsInterface<User,UserCredentials>,
    @inject (JWTTokenServiceBindings.TOKEN_SERVICE) private jwtTokenService : TokenService,
    @repository(CartRepository) public cartRepository : CartRepository,
    @repository(BasketRepository) public basketRepository : BasketRepository
    //@repository(ItemRepository) private itemRepo : ItemRepository
  ) {}

  @post('/users', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NewUserRequestSchema, {
            title: 'NewUser',
            exclude: ['id'],
          }),
        },
      },
    })
    user: Omit<NewUserRequestSchema, 'id'>,
  ): Promise<User> {
   type omittedUserType =  Omit<NewUserRequestSchema , 'password'>;
   /**** do not persist the password *****/
   const omittedUser :   omittedUserType = {
       firstName : user.firstName,
       lastName : user.lastName,
       email : user.email
    }; 
   /***** ends*****/
    /******* validate credentials validatiy ****/
     const pickedCredentials =  _.pick( user , ['email' , 'password']);
     await this.userCredentialsService.validateUserCredentials(pickedCredentials);
    /********* persist use entity  ****/
     let savedUser = await this.signupService.createUser(<User>omittedUser);   
     let UC = new UserCredentials();
     UC.password = user.password;
     UC.userId = savedUser._id;
     await this.signupService.persistPassword(UC);
     /***** create basket for the same user ****/
     let basket = new Basket();
     basket.creationDate = new Utils().getCurrentSystemDateTime();
     let createdBasket = await this.userRepository.basket(savedUser._id).create(basket);
     if(createdBasket){
      savedUser.basketCreated = true;
      savedUser.basketId = createdBasket.id;
      /**** create cart for the basket ****/
      let cart = new Cart();
      let basketId = new ObjectId(createdBasket.id);
      const itemArray : Array<IshopItem> = new Array<IshopItem>();
      cart.items = itemArray; 
      let createdCart = await this.basketRepository.cart(basketId).create(cart);
      let createdWishlist = await this.basketRepository.wishlist(basketId).create(cart);
      let createdSavedForLater = await this.basketRepository.savedForLater(basketId).create(cart);
      let createdOrderedItems = await this.basketRepository.orderedItems(basketId).create(cart);
      if(createdCart){
          savedUser.cartCreated = true;
        }else{
          savedUser.cartCreated = false;
        }
        if(createdWishlist){
          savedUser.wishlistCreated = true;
        }else{
          savedUser.wishlistCreated = false;
        }
        if(createdSavedForLater){
          savedUser.savedForLaterCreated = true;
        }else{
          savedUser.savedForLaterCreated = false;
        }
        if(createdOrderedItems){
          savedUser.orderedItemsCreated = true;
        }else{
          savedUser.orderedItemsCreated = false;
        }
     }else{
      savedUser.basketCreated = false;
      savedUser.basketResponse = createdBasket;
     }
     return savedUser;
  }

  /******** login *******/
  @post('/users/login', {
    responses: {
      '200': {
        description: 'Return a jwt token',
        content: {'application/json': {
          schema: {
            type: 'object',
            properties: {
             token: {
               type: 'string',
             },
          },
        },}},
      },
    },
  })
  async login(
    @requestBody({
      description: 'The input of login function',
      required: true,
      content: {
     'application/json': { 
          schema: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              email: {
                type: 'string',
                format: 'email',
              },
              password: {
                type: 'string',
                minLength: 8,
              },
            },
           }
          },
       }
    })
    credentials: UserCredentialsType,
  ): Promise<{ response : object }> {
    let response = { success : false , token : '' , message : ''};
    try{
      response.success = true;
      let userFound : User =  await this.loginService.verifyCredentials(credentials);
      const userProfile = await this.userCredentialsService.convertToUserProfile(userFound);
      response.token = await this.jwtTokenService.generateToken(userProfile);
      /***try {
       fetchedItem = await this.itemRepo.get("products");
      }catch(e){
        throw new HttpErrors.ServiceUnavailable("Error connecting to redis .")
      }
      console.log("fetched item :: "+ JSON.stringify(fetchedItem));
      if(null == fetchedItem ){
        console.log("No item fetched from redis, setting new ...");      
       const rep = await this.itemRepo.set("products", item);
       console.log("resp :: " + rep );
      }****/
      response.message = 'successfully logged in .';
    }catch(e){
      response.success = false;
      response.token = '';
      response.message = e.message ;
    } 
     return  {response} ;
  }

  @get('/users/getProfile', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'The current user profile',
        content: {
          'application/json': {
            schema: UserProfileSchema,
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async getProfileByUserId(
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile): Promise<User> {
    const userId = currentUserProfile[securityId];
    let cart = null, wishlist = null , savedForLater = null , orderedItems = null ;
    let userProfile =  await this.userRepository.findById(userId);
    let basket = await this.userRepository.basket(userProfile._id).get();
     if(basket){
        const basketId = new ObjectId(basket.id);
        const filter = { fields : { id : true , items : true , basketId : true } };
        cart = await this.basketRepository.cart(basketId).get(filter);
        wishlist = await this.basketRepository.wishlist(basketId).get(filter);
        savedForLater = await this.basketRepository.savedForLater(basketId).get(filter);
        orderedItems = await this.basketRepository.orderedItems(basketId).get(filter);
        userProfile['basket'] = basket;
        if(cart){
          userProfile.basket.cart = cart;
        }
        if(wishlist){
          userProfile.basket.wishlist = wishlist;
        }
        if(savedForLater){
          userProfile.basket.savedForLater = savedForLater;
        }
        if(orderedItems){
          userProfile.basket.orderedItems = orderedItems;
        }
      }
   return userProfile;
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'User model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of User model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(User, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(User) filter?: Filter<User>,
  ): Promise<User[]> {
    return this.userRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'User PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.updateAll(user, where);
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(User, {exclude: 'where'}) filter?: FilterExcludingWhere<User>
  ): Promise<User> {
    return this.userRepository.findById(id, filter);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'User PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
  ): Promise<void> {
    await this.userRepository.updateById(id, user);
  }

  @put('/users/{id}', {
    responses: {
      '204': {
        description: 'User PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() user: User,
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'User DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }
  @get('/users/checkJWT', {
    responses: {
      '200': {
        description: 'Check JWT validity',
      },
    },
  })
  @authenticate('jwt')
  async isValidJWT( @inject(SecurityBindings.USER)currentUserProfile: UserProfile): Promise<{valid:boolean}> {
    return { valid : true };
  }
}
