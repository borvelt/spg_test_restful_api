import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Post, PostRelations, Comment, Reaction} from '../models';
import {DefaultdbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CommentRepository} from './comment.repository';
import {ReactionRepository} from './reaction.repository';

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id,
  PostRelations
> {

  public readonly comments: HasManyRepositoryFactory<Comment, typeof Post.prototype.id>;

  public readonly reactions: HasManyRepositoryFactory<Reaction, typeof Post.prototype.id>;

  constructor(
    @inject('datasources.defaultdb') dataSource: DefaultdbDataSource, @repository.getter('CommentRepository') protected commentRepositoryGetter: Getter<CommentRepository>, @repository.getter('ReactionRepository') protected reactionRepositoryGetter: Getter<ReactionRepository>,
  ) {
    super(Post, dataSource);
    this.reactions = this.createHasManyRepositoryFactoryFor('reactions', reactionRepositoryGetter,);
    this.registerInclusionResolver('reactions', this.reactions.inclusionResolver);
    this.comments = this.createHasManyRepositoryFactoryFor('comments', commentRepositoryGetter,);
    this.registerInclusionResolver('comments', this.comments.inclusionResolver);
  }
}
