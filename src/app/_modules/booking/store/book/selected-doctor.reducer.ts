import {Action, createReducer, on, State} from "@ngrx/store";
import * as SelectedDoctorActions from './selected-doctor.action';
import {SelectedDoctor} from "../../_models";

const searchCriteriaReducer = createReducer(
  undefined,
  on(SelectedDoctorActions.getSelectedDoctor, state => state),
  on(SelectedDoctorActions.updateSelectedDoctor, (state, { sDoctor }) => ({ ...sDoctor }))
);

export function reducer(state: State<SelectedDoctor> | undefined, action: Action) {
  return searchCriteriaReducer(state, action);
}
