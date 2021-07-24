import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, StateToken, Store } from "@ngxs/store";
import { Auth } from "./auth.actions";
import { ContaService } from "./services/conta.service";
import { LoginRequestModel } from './models/login-request.model';
import { StoreActions } from "../shared/store/store.actions";
import { UserActions } from "../shared/user.actions";

const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('AuthState');

export class AuthStateModel {
  email: string;
  senha: string;
}

const defaultState = {
  email: '',
  senha: ''
};

@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: defaultState,
})
@Injectable()
export class AuthState {
  constructor(private _contaService: ContaService, private _store: Store) {
  }

  @Selector()
  static getUserCredentials(state: AuthStateModel): LoginRequestModel {

    return state;
  }

  @Action(Auth.Authenticate)
  doAuthentication(
      ctx: StateContext<AuthStateModel>,
      action: Auth.Authenticate,
  ) {

    // const state = ctx.getState();
    // const payload: LoginRequestModel = {
    //   email: state.email,
    //   senha: state.senha,
    // };

    const auth$ = this._contaService.login(action.model);

    auth$.subscribe({
      next: (authResponse) => {

        // Should not be accessible by the app state, that's why app state
        // doesn't change
        this._contaService.salvarTokenUsuario(authResponse.acessToken);
        //this._store.dispatch(new UserActions.Get());
        this._store.dispatch(new Auth.AuthenticateSuccess());
      },
      error: (err) => {
        this._store.dispatch(new Auth.AuthenticateFailed(err));
      },
    });
  }

  @Action([Auth.AuthenticateSuccess, StoreActions.ResetStore])
  clearState(ctx: StateContext<AuthStateModel>) {

    this._resetAuthState(ctx);
  }

  @Action(Auth.Logout)
  doLogout(ctx: StateContext<AuthStateModel>) {

    this._resetAuthState(ctx);
    this._contaService.clearApiToken();
  }

  private _resetAuthState(ctx: StateContext<AuthStateModel>) {

    ctx.setState({
      ...defaultState,
    });
  }
}
