import {Entity, model, property, hasOne} from '@loopback/repository';
import {UserCredentials} from './user-credentials.model';
import {Basket} from './basket.model';

@model({settings: { strict: false } , name : 'users'})
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
    index : {
      unique : true
    }
  })
  email: string;

  @property({
    type: 'any',
    id: true,
    generated: true,
  })
  _id?: any;

  @hasOne(() => UserCredentials , { keyTo : 'usersId'})
  userCredentialsGetter: UserCredentials;

  @hasOne(() => Basket, { keyTo : 'usersId'})
  basket: Basket;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
