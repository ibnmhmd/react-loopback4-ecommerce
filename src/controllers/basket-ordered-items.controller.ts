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
  OrderedItems,
} from '../models';
import {BasketRepository} from '../repositories';

export class BasketOrderedItemsController {
  constructor(
    @repository(BasketRepository) protected basketRepository: BasketRepository,
  ) { }

  @get('/baskets/{id}/ordered-items', {
    responses: {
      '200': {
        description: 'Basket has one OrderedItems',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrderedItems),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<OrderedItems>,
  ): Promise<OrderedItems> {
    return this.basketRepository.orderedItems(id).get(filter);
  }

  @post('/baskets/{id}/ordered-items', {
    responses: {
      '200': {
        description: 'Basket model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrderedItems)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Basket.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderedItems, {
            title: 'NewOrderedItemsInBasket',
            exclude: ['id'],
            optional: ['basketId']
          }),
        },
      },
    }) orderedItems: Omit<OrderedItems, 'id'>,
  ): Promise<OrderedItems> {
    return this.basketRepository.orderedItems(id).create(orderedItems);
  }

  @patch('/baskets/{id}/ordered-items', {
    responses: {
      '200': {
        description: 'Basket.OrderedItems PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderedItems, {partial: true}),
        },
      },
    })
    orderedItems: Partial<OrderedItems>,
    @param.query.object('where', getWhereSchemaFor(OrderedItems)) where?: Where<OrderedItems>,
  ): Promise<Count> {
    return this.basketRepository.orderedItems(id).patch(orderedItems, where);
  }

  @del('/baskets/{id}/ordered-items', {
    responses: {
      '200': {
        description: 'Basket.OrderedItems DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(OrderedItems)) where?: Where<OrderedItems>,
  ): Promise<Count> {
    return this.basketRepository.orderedItems(id).delete(where);
  }
}
