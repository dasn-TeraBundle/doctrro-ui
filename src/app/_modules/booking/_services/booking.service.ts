import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookingSlotResponse, SelectedDoctor} from "../_models";
import {Observable} from "rxjs";


const BOOKING_SERVICE = '/booking-service';
const BOOKING_SERVICE_SLOT = `${BOOKING_SERVICE}/slot`;

@Injectable()
export class BookingService {

  constructor(private http: HttpClient) { }

  getAllSlots(doctor: SelectedDoctor): Observable<BookingSlotResponse[]> {
    const url = `${BOOKING_SERVICE_SLOT}/facility/${doctor.fid}/doctor/${doctor.did}`;

    return this.http.get<BookingSlotResponse[]>(url);
  }
}
