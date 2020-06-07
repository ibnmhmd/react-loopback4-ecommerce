import {DefaultCrudRepository} from '@loopback/repository';
import {Cart, CartRelations} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CartRepository extends DefaultCrudRepository<
  Cart,
  typeof Cart.prototype.id,
  CartRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Cart, dataSource);
  }
}
