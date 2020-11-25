import {Action, createReducer, on, State} from '@ngrx/store';
import * as DoctorActions from './doctors.action';
import {DoctorSearchResponse} from '../../../_models';

const initialState: DoctorSearchResponse[] = [];

const doctorReducer = createReducer(
  initialState,
  on(DoctorActions.getDoctors, state => state),
  on(DoctorActions.updateDoctors, (state, { doctors }) => ([...doctors] ))
);

export function reducer(state: State<DoctorSearchResponse[]> | any, action: Action) {
  return doctorReducer(state, action);
}
