import { createAction, props } from '@ngrx/store';
import {User} from "../_models/user";


export const getuser = createAction(
  '[USER] GET'
);

export const login = createAction(
  '[USER] login',
  props<{ user: User }>()
);
