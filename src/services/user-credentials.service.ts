import {bind, /* inject, */ BindingScope} from '@loopback/core';
import {UserCredentialsType} from '../types/user.credentials.type';
import isemail from 'isemail';
import {HttpErrors} from '@loopback/rest';
import {inject, Getter} from '@loopback/core';
import { isNumber } from 'util';
import {UserService} from '@loopback/authentication';
import { User } from '../models/user.model';
import {UserProfile , securityId} from '@loopback/security';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import { UserRepository } from '../repositories';
import { CONSTANT } from '../bindings/constants';

@bind({scope: BindingScope.TRANSIENT})
export class UserCredentialsService{
  constructor(@repository(UserRepository) private userRepo : UserRepository) {}
  /*
   * Add service methods here
   */
  async validateUserCredentials(credentials: UserCredentialsType) {
     if(!(credentials.email || credentials.password)){
        throw new HttpErrors.UnprocessableEntity("Missing email or password .");
     }
     if( credentials.password.length < 8 ){
       throw new HttpErrors.UnprocessableEntity("Password must be at least 8 alphanumeric long .");
     }
     if(isNumber(credentials.password) ){
       throw new HttpErrors.UnprocessableEntity(CONSTANT.ALPHA_NUM);
     }

     if(!isemail.validate(credentials.email) ){
       throw new HttpErrors.UnprocessableEntity(CONSTANT.INVALID_EMAIL);
     }
     const userPresent = await this.isUserPresent(credentials.email);
     if(userPresent){
       throw new HttpErrors.UnprocessableEntity(CONSTANT.EMAIL_TAKEN);
     }

  }

  async isUserPresent(email : string) : Promise<any> {
    return await this.userRepo.findOne({where : {email : email }});
  } 

   convertToUserProfile(user: User): UserProfile {
    let userName = '';
    if (user.firstName) {
      userName = `${user.firstName}`;
    } 
    if (user.lastName){
      userName = user.firstName
      ? `${userName} ${user.lastName}`
      : `${user.lastName}`;
    }
    const userProfile = {
      [securityId]: user._id,
      name: userName,
      id: user._id,
      email : user.email
    };
    return userProfile;
  }
 

}
