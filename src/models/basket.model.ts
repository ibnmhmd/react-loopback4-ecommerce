import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import { User } from './user.model';
import {Cart} from './cart.model';
import {Wishlist} from './wishlist.model';
import {SavedForLater} from './saved-for-later.model';
import {OrderedItems} from './ordered-items.model';

@model({name:'basket'})
export class Basket extends Entity {
  
  @belongsTo(()=> User)
  usersId: any;

  @property({
    type: 'date',
    required: true,
  })
  creationDate: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @hasOne(() => Cart)
  cart: Cart;

  @hasOne(() => Wishlist)
  wishlist: Wishlist;

  @hasOne(() => SavedForLater)
  savedForLater: SavedForLater;

  @hasOne(() => OrderedItems)
  orderedItems: OrderedItems;

  constructor(data?: Partial<Basket>) {
    super(data);
  }
}

export interface BasketRelations {
  // describe navigational properties here
}

export type BasketWithRelations = Basket & BasketRelations;
