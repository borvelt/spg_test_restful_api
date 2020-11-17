import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {Reaction} from '../models';
import {ReactionRepository} from '../repositories';

export class ReactionControllerController {
  constructor(
    @repository(ReactionRepository)
    public reactionRepository: ReactionRepository,
  ) { }

  @post('/reactions', {
    responses: {
      '200': {
        description: 'Reaction model instance',
        content: {'application/json': {schema: getModelSchemaRef(Reaction)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reaction, {
            title: 'NewReaction',
            exclude: ['id', 'createdAt', 'updatedAt',],
          }),
        },
      },
    })
    reaction: Omit<Reaction, 'id'>,
  ): Promise<Reaction> {
    return this.reactionRepository.create(reaction);
  }

  @get('/reactions/count', {
    responses: {
      '200': {
        description: 'Reaction model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Reaction) where?: Where<Reaction>,
  ): Promise<Count> {
    return this.reactionRepository.count(where);
  }

  @get('/reactions', {
    responses: {
      '200': {
        description: 'Array of Reaction model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Reaction, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Reaction) filter?: Filter<Reaction>,
  ): Promise<Reaction[]> {
    return this.reactionRepository.find(filter);
  }

  @patch('/reactions', {
    responses: {
      '200': {
        description: 'Reaction PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reaction, {partial: true, exclude: ['id', 'createdAt', 'updatedAt',], }),
        },
      },
    })
    reaction: Reaction,
    @param.where(Reaction) where?: Where<Reaction>,
  ): Promise<Count> {
    return this.reactionRepository.updateAll(reaction, where);
  }

  @get('/reactions/{id}', {
    responses: {
      '200': {
        description: 'Reaction model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Reaction, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Reaction, {exclude: 'where'}) filter?: FilterExcludingWhere<Reaction>
  ): Promise<Reaction> {
    return this.reactionRepository.findById(id, filter);
  }

  @patch('/reactions/{id}', {
    responses: {
      '204': {
        description: 'Reaction PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reaction, {partial: true, exclude: ['id', 'createdAt', 'updatedAt',], }),
        },
      },
    })
    reaction: Reaction,
  ): Promise<void> {
    await this.reactionRepository.updateById(id, reaction);
  }

  @put('/reactions/{id}', {
    responses: {
      '204': {
        description: 'Reaction PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reaction: Reaction,
  ): Promise<void> {
    await this.reactionRepository.replaceById(id, reaction);
  }

  @del('/reactions/{id}', {
    responses: {
      '204': {
        description: 'Reaction DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reactionRepository.deleteById(id);
  }
}
