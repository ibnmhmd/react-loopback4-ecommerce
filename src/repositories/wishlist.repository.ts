import {DefaultCrudRepository} from '@loopback/repository';
import {Wishlist, WishlistRelations} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WishlistRepository extends DefaultCrudRepository<
  Wishlist,
  typeof Wishlist.prototype.id,
  WishlistRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Wishlist, dataSource);
  }
}
