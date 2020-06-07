import {DefaultCrudRepository} from '@loopback/repository';
import {NavigationMenus, NavigationMenusRelations} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NavigationMenusRepository extends DefaultCrudRepository<
  NavigationMenus,
  typeof NavigationMenus.prototype.id,
  NavigationMenusRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(NavigationMenus, dataSource);
  }
}
