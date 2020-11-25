import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {BookingService} from '../../_services/booking.service';
import {fetchBookingSlot, updateBookingSlot} from './slot.action';



@Injectable()
export class BookingSlotEffects {

  fetchDoctors = createEffect(() => this.actions$.pipe(
    ofType(fetchBookingSlot),
    switchMap((action) => this.bookingService.getAllSlots(action.sDoctor)
      .pipe(
        map(slots => updateBookingSlot({slots})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private bookingService: BookingService
  ) {
  }
}
