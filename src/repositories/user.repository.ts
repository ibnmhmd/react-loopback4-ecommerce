import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, UserCredentials} from '../models';
import {DsDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserCredentialsRepository} from './user-credentials.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype._id,
  UserRelations
> {

  public readonly userCredentialsGetter: HasOneRepositoryFactory<UserCredentials, typeof User.prototype._id>;

  constructor(
    @inject('datasources.ds') dataSource: DsDataSource, @repository.getter('UserCredentialsRepository') protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>,
  ) {
    super(User, dataSource);
    this.userCredentialsGetter = this.createHasOneRepositoryFactoryFor('userCredentialsGetter', userCredentialsRepositoryGetter);
    this.registerInclusionResolver('userCredentialsGetter', this.userCredentialsGetter.inclusionResolver);
   
  }
}
