import {createFeatureSelector, createSelector} from '@ngrx/store';
import {User} from "../_models/user";
import {BookingState} from "../_modules/booking/store/booking.state";

export interface AppState {
  user: User;
  booking: BookingState
}


export const selecFeatureUser = createFeatureSelector<AppState, User>('user');
export const selectFeatureBooking = createFeatureSelector<AppState, BookingState>('booking');
