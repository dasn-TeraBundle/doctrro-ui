import { createAction, props } from '@ngrx/store';
import {SelectedDoctor} from '../../_models';

export const getSelectedDoctor = createAction(
  '[SELECTED_DOCTOR] GET'
);

export const updateSelectedDoctor = createAction(
  '[SELECTED_DOCTOR] UPDATE',
  props<{ sDoctor: SelectedDoctor }>()
);
