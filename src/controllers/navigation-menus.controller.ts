import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {NavigationMenus} from '../models';
import {NavigationMenusRepository} from '../repositories';

export class NavigationMenusController {
  constructor(
    @repository(NavigationMenusRepository)
    public navigationMenusRepository : NavigationMenusRepository,
  ) {}

  @post('/navigation-menus', {
    responses: {
      '200': {
        description: 'NavigationMenus model instance',
        content: {'application/json': {schema: getModelSchemaRef(NavigationMenus)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NavigationMenus, {
            title: 'NewNavigationMenus',
            
          }),
        },
      },
    })
    navigationMenus: NavigationMenus,
  ): Promise<NavigationMenus> {
    return this.navigationMenusRepository.create(navigationMenus);
  }

  @get('/navigation-menus/count', {
    responses: {
      '200': {
        description: 'NavigationMenus model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(NavigationMenus) where?: Where<NavigationMenus>,
  ): Promise<Count> {
    return this.navigationMenusRepository.count(where);
  }

  @get('/navigation-menus', {
    responses: {
      '200': {
        description: 'Array of NavigationMenus model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(NavigationMenus, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(NavigationMenus) filter?: Filter<NavigationMenus>,
  ): Promise<NavigationMenus[]> {
    return this.navigationMenusRepository.find(filter);
  }

  @patch('/navigation-menus', {
    responses: {
      '200': {
        description: 'NavigationMenus PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NavigationMenus, {partial: true}),
        },
      },
    })
    navigationMenus: NavigationMenus,
    @param.where(NavigationMenus) where?: Where<NavigationMenus>,
  ): Promise<Count> {
    return this.navigationMenusRepository.updateAll(navigationMenus, where);
  }

  @get('/navigation-menus/{id}', {
    responses: {
      '200': {
        description: 'NavigationMenus model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(NavigationMenus, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(NavigationMenus, {exclude: 'where'}) filter?: FilterExcludingWhere<NavigationMenus>
  ): Promise<NavigationMenus> {
    return this.navigationMenusRepository.findById(id, filter);
  }

  @patch('/navigation-menus/{id}', {
    responses: {
      '204': {
        description: 'NavigationMenus PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NavigationMenus, {partial: true}),
        },
      },
    })
    navigationMenus: NavigationMenus,
  ): Promise<void> {
    await this.navigationMenusRepository.updateById(id, navigationMenus);
  }

  @put('/navigation-menus/{id}', {
    responses: {
      '204': {
        description: 'NavigationMenus PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() navigationMenus: NavigationMenus,
  ): Promise<void> {
    await this.navigationMenusRepository.replaceById(id, navigationMenus);
  }

  @del('/navigation-menus/{id}', {
    responses: {
      '204': {
        description: 'NavigationMenus DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.navigationMenusRepository.deleteById(id);
  }
}
