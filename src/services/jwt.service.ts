import {bind, /* inject, */ BindingScope} from '@loopback/core';
import {TokenService} from '@loopback/authentication';
import {inject} from '@loopback/context';
import {HttpErrors} from '@loopback/rest';
import {promisify} from 'util';
import {UserProfile, securityId} from '@loopback/security';
import {JWTTokenServiceBindings , JWTTokenServiceConstants } from '../bindings/application.bindings';
const jwtFn = require('../bindings/modules/jwt.module');


@bind({scope: BindingScope.TRANSIENT})
export class JwtTokenService implements TokenService {
  constructor(@inject(JWTTokenServiceBindings.TOKEN_SECRET) private jwtTokenSecret : string,
  @inject(JWTTokenServiceBindings.TOKEN_EXPIRES_IN) private jwtTokenExpiry : string) {}


 async verifyToken(token: string): Promise<import("@loopback/security").UserProfile> {
    if (!token) {
      throw new HttpErrors.Unauthorized(
        `Error verifying token : 'token' is null`,
      );
    }
    let userProfile: UserProfile;

    try {
      // decode user profile from token
      const decodedToken = await jwtFn.verifyAsync(token, this.jwtTokenSecret);
      // don't copy over  token field 'iat' and 'exp', nor 'email' to user profile
      userProfile = Object.assign(
        {[securityId]: '', name: ''},
          {
            [securityId]: decodedToken.id,
            name: decodedToken.name,
            id: decodedToken.id,
            email: decodedToken.email
          },
      );
    } catch (error) {
      throw new HttpErrors.Unauthorized(
        `Error verifying token : ${error.message}`,
      );
    }
    return userProfile;
  }
  async generateToken(userProfile: import("@loopback/security").UserProfile): Promise<string> {
    if (!userProfile) {
      throw new HttpErrors.Unauthorized(
        'Error generating token : userProfile is null',
      );
    }
    const userTokenPayload = {
      id:     userProfile[securityId],
      name:   userProfile.name,
      email : userProfile.email
    };
    // Generate a JSON Web Token
    let token: string;
    try {
         token = await jwtFn.signAsync(userTokenPayload, this.jwtTokenSecret, {
         expiresIn: Number(this.jwtTokenExpiry) });
    } catch (error) {
      throw new HttpErrors.Unauthorized(`Error encoding token : ${error}`);
    }

    return token;
  }

  /*
   * Add service methods here
   */
}
