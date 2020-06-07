import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, UserCredentials, Basket} from '../models';
import {DsDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserCredentialsRepository} from './user-credentials.repository';
import {BasketRepository} from './basket.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype._id,
  UserRelations
> {

  public readonly userCredentialsGetter: HasOneRepositoryFactory<UserCredentials, typeof User.prototype._id>;

  public readonly basket: HasOneRepositoryFactory<Basket, typeof User.prototype._id>;

  constructor(
    @inject('datasources.ds') dataSource: DsDataSource, @repository.getter('UserCredentialsRepository') protected userCredentialsRepositoryGetter: Getter<UserCredentialsRepository>, @repository.getter('BasketRepository') protected basketRepositoryGetter: Getter<BasketRepository>,
  ) {
    super(User, dataSource);
    this.basket = this.createHasOneRepositoryFactoryFor('basket', basketRepositoryGetter);
    this.registerInclusionResolver('basket', this.basket.inclusionResolver);
    this.userCredentialsGetter = this.createHasOneRepositoryFactoryFor('userCredentialsGetter', userCredentialsRepositoryGetter);
    this.registerInclusionResolver('userCredentialsGetter', this.userCredentialsGetter.inclusionResolver);
   
  }
}
