import {User} from '../models';
import {UserCredentials} from '../models';
import { UserCredentialsType } from '../types/user.credentials.type';
export interface UserCredentialsInterface < T = User , Z = UserCredentials>{
     createUser(user : T ) : Promise<T>;
     persistPassword( credentials : Z ) : Promise<any>;
}
export interface UserCredentialsServiceInterface <T = UserCredentialsType , Z = string >  {
    validateUserCredentials(userCredentialsType : T ) : Promise<User>;
    isUserPresent(email : Z) : Promise<User>;
}