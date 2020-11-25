import {Action, createReducer, on, State} from "@ngrx/store";
import * as UserActions from './user.action';
import {User} from "../_models/user";

const userReducer = createReducer(
  undefined,
  on(UserActions.getuser, state => state),
  on(UserActions.login, (state, { user }) => ({ ...user }))
);

export function reducer(state: State<User> | undefined, action: Action) {
  return userReducer(state, action);
}
