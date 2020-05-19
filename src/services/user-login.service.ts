import {bind, /* inject, */ BindingScope} from '@loopback/core';
import { UserService } from '@loopback/authentication';
import { UserCredentialsType } from '../types/user.credentials.type';
import { User } from '../models';
import { UserRepository } from '../repositories';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {inject, Getter} from '@loopback/core';
import { UserCredentialsRepository } from '../repositories';
import {PasswordHasherBindings} from '../bindings/application.bindings';
import { PasswordHasher } from '../services/hash.password.bcryptjs';

@bind({scope: BindingScope.TRANSIENT})
export class UserLoginService implements UserService < User , UserCredentialsType > {
  constructor(@repository(UserRepository) private userRepo : UserRepository, 
  @repository(UserCredentialsRepository) private credentialsRepo : UserCredentialsRepository,
  @inject(PasswordHasherBindings.PASSWORD_HASHER) private passwordHasher : PasswordHasher) {}

  async verifyCredentials(credentials: UserCredentialsType): Promise<User> {
    /***** get user by email******/
    const userFound = await this.userRepo.findOne({where : { email : credentials.email }});
    if(!userFound){
      throw new HttpErrors.UnprocessableEntity("Wrong email and or password .");
    }
    /***** get the credentials by userId *****/
    const userCredential = await this.userRepo.userCredentialsGetter(userFound._id).get(); 
    if(!userCredential){
      throw new HttpErrors.UnprocessableEntity(`No credentials found for user ${userFound.firstName} .`);
    }
    let credentialsMatched : Boolean = await this.passwordHasher.comparePassword(credentials.password , userCredential.password);
    if(!credentialsMatched){
      throw new HttpErrors.UnprocessableEntity("Wrong email and or password .");
    }
    return userFound;
  }
  convertToUserProfile(user: User): import("@loopback/security").UserProfile {
    throw new Error("Method not implemented.");
  }

  /*
   * Add service methods here
   */


}
