import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Basket,
  IshopItem,
  Cart,
  Wishlist,
  SavedForLater,
} from '../models';
import {UserRepository, BasketRepository} from '../repositories';
import { authenticate } from '@loopback/authentication';
import { inject } from '@loopback/core';
import {UserProfile, securityId, SecurityBindings} from '@loopback/security';

const ObjectId = require('mongodb').ObjectId;

export class UserBasketController {
  /******** application level fields *****/
  private ishopItem:IshopItem;
  private ishopItems: Array<IshopItem>;
  private cart : Cart;
  private wishlist: Wishlist;
  private savedForLater : SavedForLater;
  private response: any = {};
  private basketResponse : any = {};
  private static  where : any  = {additionalProp1: {}};
  /********* fields end *****/

  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
    @repository(BasketRepository) public basketRepository : BasketRepository
  ) { }

  @get('/users/{id}/basket', {
    responses: {
      '200': {
        description: 'User has one Basket',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Basket),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: any,
    @param.query.object('filter') filter?: Filter<Basket>,
  ): Promise<Basket> {
    return this.userRepository.basket(id).get(filter);
  }

  @post('/users/{id}/basket', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Basket)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype._id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Basket, {
            title: 'NewBasketInUser',
            exclude: ['id'],
            optional: ['usersId']
          }),
        },
      },
    }) basket: Omit<Basket, 'id'>,
  ): Promise<Basket> {
    return this.userRepository.basket(id).create(basket);
  }

  @patch('/users/{id}/basket', {
    responses: {
      '200': {
        description: 'User.Basket PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: any,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Basket, {partial: true}),
        },
      },
    })
    basket: Partial<Basket>,
    @param.query.object('where', getWhereSchemaFor(Basket)) where?: Where<Basket>,
  ): Promise<Count> {
    return this.userRepository.basket(id).patch(basket, where);
  }

  @del('/users/{id}/basket', {
    responses: {
      '200': {
        description: 'User.Basket DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: any,
    @param.query.object('where', getWhereSchemaFor(Basket)) where?: Where<Basket>,
  ): Promise<Count> {
    return this.userRepository.basket(id).delete(where);
  }

  @post('/basket/addToCart/{basketId}', {
    responses: {
      '200': {
        description: 'Item has been successfully added to cart.',
      },
    },
  })
  @authenticate('jwt')
  async addToCart(@inject(SecurityBindings.USER)currentUserProfile: UserProfile,
   @param.path.string('basketId') basketId : string, 
                   @requestBody() requestBody : any ): Promise<Object> {
    console.log("request received for addToCart .");
    this.ishopItem =  requestBody.item;
    basketId = new ObjectId(basketId);
    this.cart = await this.basketRepository.cart(basketId).get();
    this.ishopItems = this.cart.items || [];
    this.ishopItems.push(this.ishopItem);
    this.cart.items =  this.ishopItems;
    delete this.cart.basketId;
    console.log(JSON.stringify(this.cart))
    this.basketResponse = await this.basketRepository.cart(basketId).patch(this.cart, UserBasketController.where);
    if(this.basketResponse.count == 1){
      this.response = { success : true , message : 'added to cart' };
    }else{
      this.response = { success : false , message : 'failed to add to cart' };
    }
    return this.response;
  }
  @post('/basket/addToWishlist/{basketId}', {
    responses: {
      '200': {
        description: 'Item has been successfully added to cart.',
      },
    },
  })
  @authenticate('jwt')
  async addToWishlist(@inject(SecurityBindings.USER)currentUserProfile: UserProfile,
   @param.path.string('basketId') basketId : string, 
                   @requestBody() requestBody : any ): Promise<Object> {
    console.log("request received for addToWishlist .");
    this.ishopItem = requestBody.item;
    basketId = new ObjectId(basketId);
    this.wishlist = await this.basketRepository.wishlist(basketId).get();
    this.ishopItems = this.wishlist.items || [];
    this.ishopItems.push(this.ishopItem);
    this.wishlist.items = this.ishopItems;
    delete this.wishlist.basketId;
    this.basketResponse = await this.basketRepository.wishlist(basketId).patch(this.wishlist, UserBasketController.where);
    if(this.basketResponse.count == 1){
      this.response = { success : true , message : 'added to wishlist' };
    }else{
      this.response = { success : false , message : 'failed to add to wishlist' };
    }
    return this.response;
  }
  
  @post('/basket/addToSavedForLater/{basketId}', {
    responses: {
      '200': {
        description: 'Item has been successfully added to savedforlater.',
      },
    },
  })
  @authenticate('jwt')
  async addToSavedForLater(@inject(SecurityBindings.USER)currentUserProfile: UserProfile,
   @param.path.string('basketId') basketId : string, 
                   @requestBody() requestBody : any ): Promise<Object> {
    console.log("request received for addToSavedForLater .");
    this.ishopItem =  requestBody.item;
    basketId = new ObjectId(basketId);
    this.savedForLater = await this.basketRepository.savedForLater(basketId).get();
    this.ishopItems = this.savedForLater.items || [];
    this.ishopItems.push(this.ishopItem);
    this.savedForLater.items = this.ishopItems;
    delete this.savedForLater.basketId;
    this.basketResponse = await this.basketRepository.savedForLater(basketId).patch(this.savedForLater, UserBasketController.where);
    if(this.basketResponse.count == 1){
       this.response = { success : true , message : 'added to saved for later' };
    }else{
      this.response = { success : false , message : 'failed to add to saved for later' };
    }
    return this.response;
  }

  @get('/basket/deleteFromCart/{basketId}/{itemSKU}', {
    responses: {
      '200': {
        description: 'Item has been successfully deleted.',
      },
    },
  })
  @authenticate('jwt')
  async deleteFromCart(@inject(SecurityBindings.USER)currentUserProfile: UserProfile,
   @param.path.string('basketId') basketId : string, 
             @param.path.string('itemSKU') itemSKU : string): Promise<Object> {
    console.log("request received for deleteFromCart .");
    basketId = new ObjectId(basketId);
    this.cart = await this.basketRepository.cart(basketId).get();
    this.ishopItems = this.cart.items || [];
    this.ishopItems.map((item , itemIndex ) => {
      if(item.sku && itemSKU && itemSKU === item.sku){
        this.ishopItems.splice( itemIndex  , 1 );
      }
    })
    this.cart.items = this.ishopItems;
    delete this.cart.basketId;
    this.basketResponse = await this.basketRepository.cart(basketId).patch(this.cart, UserBasketController.where);
    if(this.basketResponse.count == 1){
      this.response = { success : true , message : `item with sku # "${itemSKU}" has been deleted.` };
    }else{
      this.response = { success : false , message : `failed to delete item with sku # ${itemSKU}` };
    }
    return this.response;
  }
  @get('/basket/deleteFromWishlist/{basketId}/{itemSKU}', {
    responses: {
      '200': {
        description: 'Item has been successfully deleted.',
      },
    },
  })
  @authenticate('jwt')
  async deleteFromWishlist(@inject(SecurityBindings.USER)currentUserProfile: UserProfile,
   @param.path.string('basketId') basketId : string, 
             @param.path.string('itemSKU') itemSKU : string): Promise<Object> {
    console.log("request received for deleteFromWishlist .");
    basketId = new ObjectId(basketId);
    this.wishlist = await this.basketRepository.wishlist(basketId).get();
    this.ishopItems = this.wishlist.items || [];
    this.ishopItems.map((item , itemIndex ) => {
      if(item.sku && itemSKU && itemSKU === item.sku){
        this.ishopItems.splice( itemIndex  , 1 );
      }
    })
    this.wishlist.items = this.ishopItems;
    delete this.wishlist.basketId;
    this.basketResponse = await this.basketRepository.wishlist(basketId).patch(this.wishlist, UserBasketController.where);
    if(this.basketResponse.count == 1){
       this.response = { success : true , message : `item with sku # "${itemSKU}" has been deleted.` };
    }else{
      this.response = { success : false , message : `failed to delete item with sku # ${itemSKU}` };
    }
    return this.response;
  }
  @get('/basket/deleteFromSavedForLater/{basketId}/{itemSKU}', {
    responses: {
      '200': {
        description: 'Item has been successfully deleted.',
      },
    },
  })
  @authenticate('jwt')
  async deleteFromSaveForLater(@inject(SecurityBindings.USER)currentUserProfile: UserProfile
  , @param.path.string('basketId') basketId : string, 
             @param.path.string('itemSKU') itemSKU : string): Promise<Object> {
    console.log("request received for deleteFromSaveForLater .");
    basketId = new ObjectId(basketId);
    this.savedForLater = await this.basketRepository.savedForLater(basketId).get();
    this.ishopItems = this.savedForLater.items || [];
    this.ishopItems.map((item , itemIndex ) => {
      if(item.sku && itemSKU && itemSKU === item.sku){
        this.ishopItems.splice( itemIndex  , 1 );
      }
    })
    this.savedForLater.items = this.ishopItems;
    delete this.savedForLater.basketId;
    this.basketResponse = await this.basketRepository.savedForLater(basketId).patch(this.savedForLater, UserBasketController.where);
    if(this.basketResponse.count == 1){
       this.response = { success : true , message : `item with sku # "${itemSKU}" has been deleted.` };
    }else{
      this.response = { success : false , message : `failed to delete item with sku # ${itemSKU}` };
    }
    return this.response;
  }
}
