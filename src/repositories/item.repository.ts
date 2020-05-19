/**import {DefaultKeyValueRepository, juggler} from '@loopback/repository';
import {Item} from '../models';
import {RedisDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ItemRepository extends DefaultKeyValueRepository<
  Item
> {
  constructor(
    @inject('datasources.redisDS') dataSource: RedisDsDataSource,
  ) {
    super(Item, dataSource);
  }
}**/
