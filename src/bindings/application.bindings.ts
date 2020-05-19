
import {BindingKey} from '@loopback/context';
import {User} from '../models';
import {UserCredentialsType} from '../types/user.credentials.type';
import {UserService ,  TokenService} from '@loopback/authentication';
import { SignupService} from '../services/signup.service';
import { UserCredentialsInterface } from '../interfaces/user-credentials-interface';
import {UserCredentials} from '../models/user-credentials.model';
import {PasswordHasher} from '../services/hash.password.bcryptjs';

export namespace UserCredentialsServiceBindings {
  export const USER_SERVICE = BindingKey.create<any>('services.user.credential.service');
}

export namespace UserLoginServiceBindings {
 export const LOGIN_SERVICE = BindingKey.create<UserService<User , UserCredentialsType>>('services.user.login.service');
}

export namespace UserSignupServiceBindings {
  export const SIGNUP_SERVICE = BindingKey.create<UserCredentialsInterface<User, UserCredentials>>('services.user.signup.service');
}
export namespace PasswordHasherBindings {
  export const PASSWORD_HASHER = BindingKey.create<PasswordHasher>(
    'services.hasher',
  );
  export const ROUNDS = BindingKey.create<number>('services.hasher.round');
}
export namespace TokenServiceConstants {
  export const TOKEN_SECRET_VALUE = 'myjwts3cr3t';
  export const TOKEN_EXPIRES_IN_VALUE = '600';
}

export namespace JWTTokenServiceBindings {
  export const TOKEN_SECRET = BindingKey.create<string>(
    'authentication.jwt.secret',
  );
export const TOKEN_EXPIRES_IN = BindingKey.create<string>(
    'authentication.jwt.expires.in.seconds',
  );
export const TOKEN_SERVICE = BindingKey.create<TokenService>(
    'services.authentication.jwt.tokenservice',
  );
}
export namespace JWTTokenServiceConstants {
  export const TOKEN_SECRET_VALUE = 'ishopjwts3cr3tkey';
  export const TOKEN_EXPIRES_IN_VALUE = '600';
}