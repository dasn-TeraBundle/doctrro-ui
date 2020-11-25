import {combineReducers} from '@ngrx/store';
import * as fromSearchCriteria from './filters/search-filter.reducer';
import * as fromDoctors from './doctors/doctors.reducer';

export const reducer = combineReducers({
  filters: fromSearchCriteria.reducer,
  doctors: fromDoctors.reducer
})
