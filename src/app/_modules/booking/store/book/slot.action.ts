import { createAction, props } from '@ngrx/store';
import {BookingSlotResponse, SelectedDoctor} from '../../_models';

export const getBookingSlot = createAction(
  '[BOOKING_SLOT] GET'
);

export const fetchBookingSlot = createAction(
  '[BOOKING_SLOT] FETCH',
  props<{ sDoctor: SelectedDoctor }>()
);

export const updateBookingSlot = createAction(
  '[BOOKING_SLOT] UPDATE',
  props<{ slots: BookingSlotResponse[] }>()
);
