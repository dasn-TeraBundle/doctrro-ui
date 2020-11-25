import {Component, Input, OnInit} from '@angular/core';
import {DoctorSearchResponse} from "../../_models";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {updateSelectedDoctor} from "../../store/book/selected-doctor.action";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  @Input() doctor: DoctorSearchResponse;

  ratingLabel: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store) { }

  ngOnInit(): void {
    if (this.doctor.rating === 0) {
      this.ratingLabel = 'No ratings';
    } else {
      this.ratingLabel = `${this.doctor.rating}`;
    }
  }

  goToBooking(facilityId: string): void {
    // const url = `./book/fid/${facilityId}/did/${this.doctor.regId}`;
    const url = './book';
    this.store.dispatch(updateSelectedDoctor({sDoctor: {fid: facilityId, did: this.doctor.regId}}))
    this.router.navigate([url], {relativeTo: this.route});
  }
}
