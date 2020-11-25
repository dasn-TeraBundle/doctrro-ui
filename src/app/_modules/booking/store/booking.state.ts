import {BookingSlotResponse, DoctorSearchResponse, SearchFilters, SelectedDoctor} from '../_models';
import {createSelector} from '@ngrx/store';
import {selectFeatureBooking} from '../../../store/state';

export interface SearchState {
  filters: SearchFilters;
  doctors: DoctorSearchResponse[];
}

export interface BookingState {
  search: SearchState;
  selectedDoctor: SelectedDoctor;
  slots: BookingSlotResponse[];
}

export const selectSearchFilters = createSelector(selectFeatureBooking, state => state.search.filters);

export const selectDoctors = createSelector(selectFeatureBooking,
  (state) => state.search.doctors);
export const selectDoctor = createSelector(
  selectDoctors,
  (doctors: DoctorSearchResponse[], props: SelectedDoctor) => {
    const doc = doctors.filter(d => d.regId === props.did);
    if (doc.length > 0) {
      const doctor: DoctorSearchResponse = {
        ...doc[0],
        clinics: doc[0].clinics.filter(c => c.id === props.fid)
      };
      return doctor;
    } else {
      return undefined;
    }
  }
);

export const selectSelectedDoctor = createSelector(selectFeatureBooking, state => state.selectedDoctor);

export const selectBookingSlots = createSelector(selectFeatureBooking, state => state.slots);
