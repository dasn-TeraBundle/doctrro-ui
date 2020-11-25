import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {DoctorSearchResponse, SelectedDoctor} from '../../_models';
import {select, Store} from '@ngrx/store';
import {selectDoctor, selectSelectedDoctor} from '../../store/booking.state';
import {switchMap} from 'rxjs/operators';
import {fetchBookingSlot} from '../../store/book/slot.action';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, OnDestroy {

  doctor: DoctorSearchResponse;

  private data: SelectedDoctor;
  private storeSub: any;

  constructor(private router: Router,
              private store: Store) {
  }

  ngOnInit(): void {
    this.storeSub = this.store.select(selectSelectedDoctor)
      .pipe(
        switchMap(sd => {
          this.data = sd;
          return this.store.pipe(select(selectDoctor, sd));
        })
      ).subscribe(doctor => {
        this.doctor = doctor;
        this.store.dispatch(fetchBookingSlot({sDoctor: this.data}));
      });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
