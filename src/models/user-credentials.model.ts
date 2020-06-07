import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false} , name : 'users_credentials', foreignKeys : {  fk_usercredentials_userId : {
  name: 'fk_usercredentials_userId',
  entity: 'User',
  entityKey: '_id',
  foreignKey: 'usersId',
}}})
export class UserCredentials extends Entity {
  @property({
    type: 'any',
    required: true,
  })
  password: any;

  @property({
    type: 'any',
    required: true,
  })
  usersId: any;

  @property({
    type: 'any',
    id: true,
  })
  id?: any;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserCredentials>) {
    super(data);
  }
}

export interface UserCredentialsRelations {
  // describe navigational properties here
}

export type UserCredentialsWithRelations = UserCredentials & UserCredentialsRelations;
