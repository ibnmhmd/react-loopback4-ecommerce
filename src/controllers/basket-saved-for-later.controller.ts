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
  SavedForLater,
} from '../models';
import {BasketRepository} from '../repositories';

export class BasketSavedForLaterController {
  constructor(
    @repository(BasketRepository) protected basketRepository: BasketRepository,
  ) { }

  @get('/baskets/{id}/saved-for-later', {
    responses: {
      '200': {
        description: 'Basket has one SavedForLater',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SavedForLater),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SavedForLater>,
  ): Promise<SavedForLater> {
    return this.basketRepository.savedForLater(id).get(filter);
  }

  @post('/baskets/{id}/saved-for-later', {
    responses: {
      '200': {
        description: 'Basket model instance',
        content: {'application/json': {schema: getModelSchemaRef(SavedForLater)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Basket.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedForLater, {
            title: 'NewSavedForLaterInBasket',
            exclude: ['id'],
            optional: ['basketId']
          }),
        },
      },
    }) savedForLater: Omit<SavedForLater, 'id'>,
  ): Promise<SavedForLater> {
    return this.basketRepository.savedForLater(id).create(savedForLater);
  }

  @patch('/baskets/{id}/saved-for-later', {
    responses: {
      '200': {
        description: 'Basket.SavedForLater PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedForLater, {partial: true}),
        },
      },
    })
    savedForLater: Partial<SavedForLater>,
    @param.query.object('where', getWhereSchemaFor(SavedForLater)) where?: Where<SavedForLater>,
  ): Promise<Count> {
    return this.basketRepository.savedForLater(id).patch(savedForLater, where);
  }

  @del('/baskets/{id}/saved-for-later', {
    responses: {
      '200': {
        description: 'Basket.SavedForLater DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SavedForLater)) where?: Where<SavedForLater>,
  ): Promise<Count> {
    return this.basketRepository.savedForLater(id).delete(where);
  }
}
