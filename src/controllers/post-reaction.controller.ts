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
  Post,
  Reaction,
} from '../models';
import {PostRepository} from '../repositories';

export class PostReactionController {
  constructor(
    @repository(PostRepository) protected postRepository: PostRepository,
  ) { }

  @get('/posts/{id}/reactions', {
    responses: {
      '200': {
        description: 'Array of Post has many Reaction',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Reaction)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Reaction>,
  ): Promise<Reaction[]> {
    return this.postRepository.reactions(id).find(filter);
  }

  @post('/posts/{id}/reactions', {
    responses: {
      '200': {
        description: 'Post model instance',
        content: {'application/json': {schema: getModelSchemaRef(Reaction)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Post.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reaction, {
            title: 'NewReactionInPost',
            exclude: ['id'],
            optional: ['postId']
          }),
        },
      },
    }) reaction: Omit<Reaction, 'id'>,
  ): Promise<Reaction> {
    return this.postRepository.reactions(id).create(reaction);
  }

  @patch('/posts/{id}/reactions', {
    responses: {
      '200': {
        description: 'Post.Reaction PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reaction, {partial: true}),
        },
      },
    })
    reaction: Partial<Reaction>,
    @param.query.object('where', getWhereSchemaFor(Reaction)) where?: Where<Reaction>,
  ): Promise<Count> {
    return this.postRepository.reactions(id).patch(reaction, where);
  }

  @del('/posts/{id}/reactions', {
    responses: {
      '200': {
        description: 'Post.Reaction DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Reaction)) where?: Where<Reaction>,
  ): Promise<Count> {
    return this.postRepository.reactions(id).delete(where);
  }
}
