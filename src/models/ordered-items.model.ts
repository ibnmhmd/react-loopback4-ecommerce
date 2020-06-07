import {model, property, belongsTo} from '@loopback/repository';
import {Cart} from './cart.model';
import {Basket} from './basket.model';

@model({settings: {strict: false} , name : 'ordered_items'})
export class OrderedItems extends Cart {
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

  constructor(data?: Partial<OrderedItems>) {
    super(data);
  }
}

export interface OrderedItemsRelations {
  // describe navigational properties here
}

export type OrderedItemsWithRelations = OrderedItems & OrderedItemsRelations;
