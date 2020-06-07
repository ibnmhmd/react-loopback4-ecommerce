import {Entity, model, property} from '@loopback/repository';

@model()
export class IshopItem extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  oldPrice: number;

  @property({
    type: 'number',
    required: true,
  })
  newPrice: number;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  img: string;

  @property({
    type: 'number',
    required: true,
  })
  qty: number;

  @property({
    type: 'number',
    required: true,
  })
  availableQty: number;

  @property({
    type: 'number',
    required: true,
  })
  selectedQty: number;

  @property({
    type: 'string',
    required: true,
  })
  bigImg: string;

  @property({
    type: 'string',
    required: true,
  })
  sku: string;

  @property({
    type: 'number',
  })
  ratings?: number;

  @property({
    type: 'string',
  })
  comments?: string;

  @property({
    type: 'string',
    required: true,
  })
  itemStatus: string;

  constructor(data?: Partial<IshopItem>) {
    super(data);
  }
}

export interface IshopItemRelations {
  // describe navigational properties here
}

export type IshopItemWithRelations = IshopItem & IshopItemRelations;
