import {Entity, hasMany, model, property} from '@loopback/repository';
import {Comment} from './comment.model';
import {Reaction} from './reaction.model';

@model()
export class Post extends Entity {

  @property({
    id: true,
    type: 'number',
  })
  id: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  content: object[];

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  createdAt?: string;

  @property({
    type: 'date',
    defaultFn: 'now',
  })
  updatedAt?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  isPublished?: boolean;

  @property({
    type: 'number',
  })
  userId?: number;

  @hasMany(() => Comment)
  comments: Comment[];

  @hasMany(() => Reaction)
  reactions: Reaction[];

  constructor(data?: Partial<Post>) {
    super(data);
  }
}

export interface PostRelations {
  // describe navigational properties here
}

export type PostWithRelations = Post & PostRelations;
