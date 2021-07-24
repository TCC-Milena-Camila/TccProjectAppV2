import {
  Action,
  Selector,
  State,
  StateContext,
  StateToken,
  Store,
} from '@ngxs/store';
import {UserModel} from './models/user.model';
import {Injectable} from '@angular/core';
import {UserActions} from './user.actions';
import {UserService} from './services/user.service';

export const USER_STATE_TOKEN = new StateToken<UserStateModel>('UserState');

export interface UserStateModel {

  user: UserModel;
  isLoaded: boolean;
  hasError: boolean;
}

const defaultState: UserStateModel = {
  user: new UserModel(),
  isLoaded: false,
  hasError: false,
};

@State<UserStateModel>({
  name: USER_STATE_TOKEN,
  defaults: defaultState,
})
@Injectable()
export class UserState{
  constructor(private store: Store, private userService: UserService) {
  }

  @Selector()
  static hasError(state: UserStateModel): boolean {

    return state.hasError;
  }

  @Selector()
  static isLoaded(state: UserStateModel): boolean {

    return state.isLoaded;
  }

  @Selector()
  static getUser(state: UserStateModel): UserModel {

    return state.user;
  }

  @Action(UserActions.Get)
  getUser(ctx: StateContext<UserStateModel>) {

    const state = ctx.getState();
    const getUser$ = this.userService.get$();
    console.log('usuario: ', getUser$);

    getUser$.subscribe({
      next: (user) => {
        ctx.setState({
          ...state,
          isLoaded: true,
          user,
        });

        this.store.dispatch(new UserActions.GetSuccess());
      },
      error: (err) => {

        ctx.setState({
          ...state,
          isLoaded: true,
          hasError: true,
        });

        this.store.dispatch(new UserActions.GetFailed(err));
      },
    });
  }


}
