import {bind, /* inject, */ BindingScope} from '@loopback/core';

import isemail from 'isemail';
import {HttpErrors, jsonOrBooleanToJSON} from '@loopback/rest';
import {inject, Getter} from '@loopback/core';
import { isNumber } from 'util';
import {UserService} from '@loopback/authentication';
import { User } from '../models/user.model';
import {UserProfile } from '@loopback/security';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import { UserRepository } from '../repositories';
import { UserCredentialsInterface } from '../interfaces/user-credentials-interface';
import {UserCredentials} from '../models/user-credentials.model';
import {PasswordHasherBindings} from '../bindings/application.bindings';
import {PasswordHasher} from '../services/hash.password.bcryptjs';

@bind({scope: BindingScope.SINGLETON})
export class SignupService implements UserCredentialsInterface <User, UserCredentials>{
  constructor(@repository(UserRepository) private userRepo : UserRepository,
  @inject(PasswordHasherBindings.PASSWORD_HASHER) private passwordHasher : PasswordHasher ) {}
  
  async createUser(user: User): Promise<User> {
    return this.userRepo.create(user);
  }
  async persistPassword(credentials : UserCredentials): Promise<any> {
    credentials.password = await this.passwordHasher.hashPassword(credentials.password);
    return this.userRepo.userCredentialsGetter(credentials.userId).create(credentials);
  }

    /*
     * Add service methods here
     */
}
