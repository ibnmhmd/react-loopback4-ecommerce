import {DefaultCrudRepository} from '@loopback/repository';
import {SavedForLater, SavedForLaterRelations} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SavedForLaterRepository extends DefaultCrudRepository<
  SavedForLater,
  typeof SavedForLater.prototype.id,
  SavedForLaterRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(SavedForLater, dataSource);
  }
}
