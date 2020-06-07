import {model, property, belongsTo} from '@loopback/repository';
import {Cart} from './cart.model';
import {Basket} from './basket.model';

@model({settings: {strict: false} , name : 'wishlist'})
export class Wishlist extends Cart {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Wishlist>) {
    super(data);
  }
}

export interface WishlistRelations {
  // describe navigational properties here
}

export type WishlistWithRelations = Wishlist & WishlistRelations;
