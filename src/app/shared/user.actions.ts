import { BaseActionsErrorModel } from './models/base-actions-error.model';

export namespace UserActions {

  export class Get {

    static readonly type = '[User API] GetUser';
  }

  export class GetSuccess {

    static readonly type = '[User API] GetUserSuccess';
  }

  export class GetFailed extends BaseActionsErrorModel {

    static readonly type = '[User API] GetUserFailed';
  }

  export class ResetState {

    static readonly type = '[User API] ResetState';
  }
}
