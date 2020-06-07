import {Entity, model, property, belongsTo} from '@loopback/repository';
import { IshopItem } from './ishop-item.model';
import { Basket } from './basket.model';

@model({name: 'cart'})
export class Cart extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  items?: IshopItem[];

  @belongsTo(() => Basket)
  basketId?: any;

  constructor(data?: Partial<Cart>) {
    super(data);
  }
}

export interface CartRelations {
  // describe navigational properties here
}

export type CartWithRelations = Cart & CartRelations;
