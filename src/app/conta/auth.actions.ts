import { BaseActionsErrorModel } from '../shared/models/base-actions-error.model';
import { LoginRequestModel } from './models/login-request.model';

export namespace Auth {

  // Get the App token
  export class Authenticate {

    static readonly type = '[Auth] Do Authentication';

    constructor(public model: LoginRequestModel) {
    }
  }

  export class AuthenticateSuccess {

    static readonly type = '[Auth] AuthenticateSuccess';
  }

  export class AuthenticateFailed extends BaseActionsErrorModel {

    static readonly type = '[Auth] AuthenticateFailed';
  }

  export class Logout {

    static readonly type = '[Auth] Logout';
  }
}
