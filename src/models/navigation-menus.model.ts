import {Entity, model, property} from '@loopback/repository';

@model({name : 'navigation_menus'})
export class NavigationMenus extends Entity {
  
  @property({
    type: 'any',
    id: true,
  })
  id?: any;
  
  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  menus: object[];


  constructor(data?: Partial<NavigationMenus>) {
    super(data);
  }
}

export interface NavigationMenusRelations {
  // describe navigational properties here
}

export type NavigationMenusWithRelations = NavigationMenus & NavigationMenusRelations;
