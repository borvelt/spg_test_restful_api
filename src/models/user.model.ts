import {Entity, hasMany, model, property} from '@loopback/repository';
import {Post} from './post.model';

@model()
export class User extends Entity {

  @property({
    id: true,
    type: 'number',
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    hidden: true,
  })
  password: string;

  @property({
    type: 'boolean',
    default: true,
  })
  isEnabled?: boolean;

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
    type: 'date',
    defaultFn: 'now',
  })
  lastLoginAt?: string;

  @hasMany(() => Post)
  posts: Post[];
  // Define well-known properties here

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
