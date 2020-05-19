import {User} from "../../models/user.model";
import { model, property} from '@loopback/repository';

@model()
export class NewUserRequestSchema extends User {
  @property({
    type: 'string',
    required: true,
  })
  password: string;
}