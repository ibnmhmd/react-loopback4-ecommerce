import {model, property, belongsTo} from '@loopback/repository';
import {Cart} from './cart.model';
import {Basket} from './basket.model';

@model({settings: {strict: false}, name: 'items_saved_for_later'})
export class SavedForLater extends Cart {
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

  constructor(data?: Partial<SavedForLater>) {
    super(data);
  }
}

export interface SavedForLaterRelations {
  // describe navigational properties here
}

export type SavedForLaterWithRelations = SavedForLater & SavedForLaterRelations;
