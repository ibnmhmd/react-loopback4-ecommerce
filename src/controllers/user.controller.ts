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
import {User , UserCredentials } from '../models';
import {UserRepository} from '../repositories';
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

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository : UserRepository,
    @inject(UserCredentialsServiceBindings.USER_SERVICE) public userCredentialsService : any,
    @inject(UserLoginServiceBindings.LOGIN_SERVICE) public loginService : UserService<User, UserCredentialsType>,
    @inject(UserSignupServiceBindings.SIGNUP_SERVICE) public signupService : UserCredentialsInterface<User,UserCredentials>,
    @inject (JWTTokenServiceBindings.TOKEN_SERVICE) private jwtTokenService : TokenService
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
  ): Promise<{ token : string}> {
     console.log("Request :: " + JSON.stringify(credentials));
     let userFound : User =  await this.loginService.verifyCredentials(credentials);
     console.log("User found in login :: " + JSON.stringify(userFound));
     const userProfile = await this.userCredentialsService.convertToUserProfile(userFound);
     console.log("user profiles :: "+ JSON.stringify(userProfile));
     const token = await this.jwtTokenService.generateToken(userProfile);
     const item : Item = new Item ({
       name :"belt",
       price :124,
       img : "/img.png"
     });
     console.log(JSON.stringify(item));
     let fetchedItem;
     console.log("Fetching item from redis cache ... ");
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
     
     
     return  { token } ;
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
   console.log("user prof :: "+ JSON.stringify(currentUserProfile) );
    const userId = currentUserProfile[securityId];
    return this.userRepository.findById(userId);
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

}
