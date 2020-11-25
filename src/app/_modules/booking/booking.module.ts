import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import * as comp from './_components';
import {BookingRoutingModule} from './booking-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../shared/shared-material/shared-material.module';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './_services/search.service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {DoctorsEffects} from './store/search/doctors/doctors.effects';
import {StarRatingModule} from 'angular-star-rating';
import * as fromSearchReducer from './store/search/search.reducer';
import * as fromSelectedDoctorReducer from './store/book/selected-doctor.reducer';
import {BookingService} from './_services/booking.service';
import {BookingSlotEffects} from './store/book/slot.effects';
import * as fromBookingSlotReducer from './store/book/slot.reducer';


@NgModule({
  declarations: [
    comp.SearchComponent,
    comp.HomeComponent,
    comp.BookingComponent,
    comp.DoctorComponent,
    comp.SlotsComponent,
    comp.SlotComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedMaterialModule,
    StarRatingModule.forRoot(),

    StoreModule.forFeature('booking', {
      search: fromSearchReducer.reducer,
      selectedDoctor: fromSelectedDoctorReducer.reducer,
      slots: fromBookingSlotReducer.reducer
    }),
    EffectsModule.forFeature([DoctorsEffects, BookingSlotEffects]),

    BookingRoutingModule
  ],
  providers: [SearchService, BookingService, DatePipe]
})
export class BookingModule {
}
