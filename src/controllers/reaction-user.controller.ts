import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Reaction,
  User,
} from '../models';
import {ReactionRepository} from '../repositories';

export class ReactionUserController {
  constructor(
    @repository(ReactionRepository)
    public reactionRepository: ReactionRepository,
  ) { }

  @get('/reactions/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Reaction',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.number('id') id: typeof Reaction.prototype.id,
  ): Promise<User> {
    return this.reactionRepository.user(id);
  }
}
