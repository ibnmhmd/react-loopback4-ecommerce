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
  Cart,
} from '../models';
import {BasketRepository} from '../repositories';

export class BasketCartController {
  constructor(
    @repository(BasketRepository) protected basketRepository: BasketRepository,
  ) { }

  @get('/baskets/{id}/cart', {
    responses: {
      '200': {
        description: 'Basket has one Cart',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cart),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Cart>,
  ): Promise<Cart> {
    return this.basketRepository.cart(id).get(filter);
  }

  @post('/baskets/{id}/cart', {
    responses: {
      '200': {
        description: 'Basket model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cart)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Basket.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cart, {
            title: 'NewCartInBasket',
            exclude: ['id'],
            optional: ['basketId']
          }),
        },
      },
    }) cart: Omit<Cart, 'id'>,
  ): Promise<Cart> {
    return this.basketRepository.cart(id).create(cart);
  }

  @patch('/baskets/{id}/cart', {
    responses: {
      '200': {
        description: 'Basket.Cart PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cart, {partial: true}),
        },
      },
    })
    cart: Partial<Cart>,
    @param.query.object('where', getWhereSchemaFor(Cart)) where?: Where<Cart>,
  ): Promise<Count> {
    return this.basketRepository.cart(id).patch(cart, where);
  }

  @del('/baskets/{id}/cart', {
    responses: {
      '200': {
        description: 'Basket.Cart DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Cart)) where?: Where<Cart>,
  ): Promise<Count> {
    return this.basketRepository.cart(id).delete(where);
  }
}
