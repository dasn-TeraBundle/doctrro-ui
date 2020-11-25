import { createAction, props } from '@ngrx/store';
import {DoctorSearchResponse, SearchFilters} from '../../../_models';

export const getDoctors = createAction(
  '[DOCTORS] GET'
);

export const fetchDoctors = createAction(
  '[DOCTORS] FETCH',
  props<{ criteria: SearchFilters }>()
);

export const updateDoctors = createAction(
  '[DOCTORS] UPDATE',
  props<{ doctors: DoctorSearchResponse[] }>()
);
