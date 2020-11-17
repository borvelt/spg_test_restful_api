import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Reaction, ReactionRelations, User} from '../models';
import {DefaultdbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class ReactionRepository extends DefaultCrudRepository<
  Reaction,
  typeof Reaction.prototype.id,
  ReactionRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Reaction.prototype.id>;

  constructor(
    @inject('datasources.defaultdb') dataSource: DefaultdbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Reaction, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
