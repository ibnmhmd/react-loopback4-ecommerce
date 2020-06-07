import {DefaultCrudRepository} from '@loopback/repository';
import {OrderedItems, OrderedItemsRelations} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderedItemsRepository extends DefaultCrudRepository<
  OrderedItems,
  typeof OrderedItems.prototype.id,
  OrderedItemsRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(OrderedItems, dataSource);
  }
}
