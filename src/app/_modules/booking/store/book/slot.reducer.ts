import {Action, createReducer, on, State} from "@ngrx/store";
import * as BookingSlotActions from './slot.action';
import {BookingSlotResponse} from "../../_models";


const initialState: BookingSlotResponse[] = [];

const bookingSlotReducer = createReducer(
  initialState,
  on(BookingSlotActions.getBookingSlot, state => state),
  on(BookingSlotActions.updateBookingSlot, (state, { slots }) => ([...slots] ))
);

export function reducer(state: State<BookingSlotResponse[]> | any, action: Action) {
  return bookingSlotReducer(state, action);
}
