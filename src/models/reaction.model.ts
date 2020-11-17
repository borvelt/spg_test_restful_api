import {belongsTo, Entity, model, property} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Reaction extends Entity {

  @property({
    id: true,
    type: 'number',
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

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
    type: 'number',
  })
  postId?: number;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<Reaction>) {
    super(data);
  }
}

export interface ReactionRelations {
  // describe navigational properties here
}

export type ReactionWithRelations = Reaction & ReactionRelations;
