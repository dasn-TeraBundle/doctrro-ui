import { createAction, props } from '@ngrx/store';
import {SearchFilters} from "../../../_models";

export const getSearchCriteria = createAction(
  '[SEARCH_CRITERIA] GET'
);

export const updateSearchCriteria = createAction(
  '[SEARCH_CRITERIA] UPDATE',
  props<{ criteria: SearchFilters }>()
);
