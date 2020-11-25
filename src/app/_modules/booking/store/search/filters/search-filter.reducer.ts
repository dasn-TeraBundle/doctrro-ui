import {Action, createReducer, on, State} from "@ngrx/store";
import * as CriteriaActions from './search-filter.action';
import {SearchFilters} from "../../../_models";

const searchCriteriaReducer = createReducer(
  undefined,
  on(CriteriaActions.getSearchCriteria, state => state),
  on(CriteriaActions.updateSearchCriteria, (state, { criteria }) => ({ ...criteria }))
);

export function reducer(state: State<SearchFilters> | undefined, action: Action) {
  return searchCriteriaReducer(state, action);
}
