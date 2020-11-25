import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BookingSlotResponse} from "../../_models";
import {Store} from "@ngrx/store";
import {DatePipe} from "@angular/common";
import {selectBookingSlots} from "../../store/booking.state";
import {map} from "rxjs/operators";
import {MatCalendarCellClassFunction} from "@angular/material/datepicker";

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlotsComponent implements OnInit, OnDestroy {

  bookingSlotsGroup: BookingSlotGroup;
  minDate: Date;
  maxDate: Date;
  selectedDate: Date;
  slots: BookingSlotResponse[] = [];

  private slotsSub: any;

  constructor(private store: Store,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    const d = new Date();
    this.minDate = d;
    this.maxDate = new Date(d.getFullYear(), d.getMonth() + 2, d.getDate());

    this.slotsSub = this.store.select(selectBookingSlots).pipe(
      map(slots => {
        return slots.reduce((acc, slot) => {
          const dt = this.datePipe.transform(slot.startTime, 'yyyy-MM-dd');
          acc[dt] = acc[dt] || [];
          acc[dt].push(slot);

          return acc;
        }, {});
      })
    ).subscribe(slots => this.bookingSlotsGroup = slots);
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = this.datePipe.transform(cellDate, 'yyyy-MM-dd');

      if (this.bookingSlotsGroup) {
        const slots = this.bookingSlotsGroup[date] || [];
        const avlSlots = slots.filter(slot => slot.status === 'AVAILABLE').length;
        if (avlSlots > 0) return 'slots-available';
      }
    }

    return '';
  }

  filterSlotDates = (d: Date | null): boolean => {
    const date = this.datePipe.transform(d, 'yyyy-MM-dd');
    return this.bookingSlotsGroup[date] !== undefined;
  }

  selectedDateChanged() {
    const date = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
    this.slots = this.bookingSlotsGroup[date];
    console.log(this.slots);
  }

  ngOnDestroy(): void {
    this.slotsSub.unsubscribe();
  }
}

interface BookingSlotGroup {
  [key: string]: BookingSlotResponse[];
}

