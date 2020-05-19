import {BootMixin} from '@loopback/boot';
import {ApplicationConfig , createBindingFromClass , inject, Context} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RestApplication, RouterSpec} from '@loopback/rest';
import path from 'path';
import {RepositoryMixin} from '@loopback/repository';
import { UserCredentialsServiceBindings , UserLoginServiceBindings,
  UserSignupServiceBindings , PasswordHasherBindings , JWTTokenServiceBindings , JWTTokenServiceConstants} from './bindings/application.bindings';
import { UserCredentialsService , UserLoginService , SignupService , JwtTokenService} from './services';
import { BcryptHasher } from './services/hash.password.bcryptjs';
import {AuthenticationComponent, AuthenticationBindings} from '@loopback/authentication';
import { AuthenticationSequence } from './sequence/sequence';
import { JWTAuthenticationStrategy } from './authentication-strategies/jwt-strategy';
import {registerAuthenticationStrategy  } from '@loopback/authentication';
import { ServiceMixin } from '@loopback/service-proxy';

const expressRouteHandler = require('./express-route-handler').expressRouteHandler;


export class AppApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  private app: RestApplication = new RestApplication();
 
  constructor(options: ApplicationConfig = {}) {
    super(options);
   
    // mount express route handler
    this.mountExpressRouter('/', expressRouteHandler);
    // set up application bindings
    this.setUpBindings();

    // inject the core authentication component
    this.component(AuthenticationComponent);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);
    
    // register the custom authentication strategy
     registerAuthenticationStrategy( this , JWTAuthenticationStrategy);

    // Set up the custom sequence
    this.sequence(AuthenticationSequence);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
      datasources : {
        dirs: ['datasources'],
        extensions: ['.datasource.js'],
        nested: true,
      },
      repositories : {
        dirs: ['repositories'],
        extensions: ['.repository.js'],
        nested: true
      }
    };

  }

  setUpBindings(): void {

     this.bind(UserCredentialsServiceBindings.USER_SERVICE).toClass(UserCredentialsService);
     this.bind(UserLoginServiceBindings.LOGIN_SERVICE).toClass(UserLoginService);
     this.bind(UserSignupServiceBindings.SIGNUP_SERVICE).toClass(SignupService);
     //  Bind bcrypt hash services
     this.bind(PasswordHasherBindings.ROUNDS).to(10);
     this.bind(PasswordHasherBindings.PASSWORD_HASHER).toClass(BcryptHasher);
     /****** jwt bindings ****/
     this.bind(JWTTokenServiceBindings.TOKEN_SERVICE).toClass(JwtTokenService);
     this.bind(JWTTokenServiceBindings.TOKEN_SECRET).to(JWTTokenServiceConstants.TOKEN_SECRET_VALUE);
     this.bind(JWTTokenServiceBindings.TOKEN_EXPIRES_IN).to(JWTTokenServiceConstants.TOKEN_EXPIRES_IN_VALUE);
  }

}
