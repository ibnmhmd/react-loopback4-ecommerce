import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Basket, BasketRelations, Cart, Wishlist, SavedForLater, OrderedItems} from '../models';
import {DsDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CartRepository} from './cart.repository';
import {WishlistRepository} from './wishlist.repository';
import {SavedForLaterRepository} from './saved-for-later.repository';
import {OrderedItemsRepository} from './ordered-items.repository';

export class BasketRepository extends DefaultCrudRepository<Basket,typeof Basket.prototype.id,BasketRelations
> {

  public readonly cart: HasOneRepositoryFactory<Cart, typeof Basket.prototype.id>;

  public readonly wishlist: HasOneRepositoryFactory<Wishlist, typeof Basket.prototype.id>;

  public readonly savedForLater: HasOneRepositoryFactory<SavedForLater, typeof Basket.prototype.id>;

  public readonly orderedItems: HasOneRepositoryFactory<OrderedItems, typeof Basket.prototype.id>;

  constructor(
    @inject('datasources.ds') dataSource: DsDataSource, @repository.getter('CartRepository') protected cartRepositoryGetter: Getter<CartRepository>, @repository.getter('WishlistRepository') protected wishlistRepositoryGetter: Getter<WishlistRepository>, @repository.getter('SavedForLaterRepository') protected savedForLaterRepositoryGetter: Getter<SavedForLaterRepository>, @repository.getter('OrderedItemsRepository') protected orderedItemsRepositoryGetter: Getter<OrderedItemsRepository>,) {
    super(Basket, dataSource);
    this.orderedItems = this.createHasOneRepositoryFactoryFor('orderedItems', orderedItemsRepositoryGetter);
    this.registerInclusionResolver('orderedItems', this.orderedItems.inclusionResolver);
    this.savedForLater = this.createHasOneRepositoryFactoryFor('savedForLater', savedForLaterRepositoryGetter);
    this.registerInclusionResolver('savedForLater', this.savedForLater.inclusionResolver);
    this.wishlist = this.createHasOneRepositoryFactoryFor('wishlist', wishlistRepositoryGetter);
    this.registerInclusionResolver('wishlist', this.wishlist.inclusionResolver);
    this.cart = this.createHasOneRepositoryFactoryFor('cart', cartRepositoryGetter);
    this.registerInclusionResolver('cart', this.cart.inclusionResolver);
  }
}
