import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {SearchService} from '../../../_services/search.service';
import {fetchDoctors, updateDoctors} from './doctors.action';



@Injectable()
export class DoctorsEffects {

  fetchDoctors = createEffect(() => this.actions$.pipe(
    ofType(fetchDoctors),
    switchMap((action) => this.searchService.searchDoctor(action.criteria)
      .pipe(
        map(doctors => updateDoctors({doctors})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {
  }
}
