import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Basket,
  Wishlist,
} from '../models';
import {BasketRepository} from '../repositories';

export class BasketWishlistController {
  constructor(
    @repository(BasketRepository) protected basketRepository: BasketRepository,
  ) { }

  @get('/baskets/{id}/wishlist', {
    responses: {
      '200': {
        description: 'Basket has one Wishlist',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Wishlist),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Wishlist>,
  ): Promise<Wishlist> {
    return this.basketRepository.wishlist(id).get(filter);
  }

  @post('/baskets/{id}/wishlist', {
    responses: {
      '200': {
        description: 'Basket model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wishlist)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Basket.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wishlist, {
            title: 'NewWishlistInBasket',
            exclude: ['id'],
            optional: ['basketId']
          }),
        },
      },
    }) wishlist: Omit<Wishlist, 'id'>,
  ): Promise<Wishlist> {
    return this.basketRepository.wishlist(id).create(wishlist);
  }

  @patch('/baskets/{id}/wishlist', {
    responses: {
      '200': {
        description: 'Basket.Wishlist PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wishlist, {partial: true}),
        },
      },
    })
    wishlist: Partial<Wishlist>,
    @param.query.object('where', getWhereSchemaFor(Wishlist)) where?: Where<Wishlist>,
  ): Promise<Count> {
    return this.basketRepository.wishlist(id).patch(wishlist, where);
  }

  @del('/baskets/{id}/wishlist', {
    responses: {
      '200': {
        description: 'Basket.Wishlist DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Wishlist)) where?: Where<Wishlist>,
  ): Promise<Count> {
    return this.basketRepository.wishlist(id).delete(where);
  }
}
