import {Component, OnInit} from '@angular/core';
import {PatientRequest} from "../../_models";
import {FormGroup} from "@angular/forms";
import {RegistrationService} from "../../_services/registration.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {selecFeatureUser} from '../../../../store/state';
import {User} from "../../../../_models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {

  patientReq = new PatientRequest();
  chronicDiseases = ['COPD', 'GERD'];
  isSubmitted = false;
  user$: Observable<User>;

  private selectedDiseases: string[] = [];


  constructor(private router: Router,
              private store: Store,
              private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selecFeatureUser);
  }

  register(): void {
    this.isSubmitted = true;
    this.registrationService.registerPatient(this.patientReq)
      .toPromise()
      .then(resp => {
        this.router.navigate(['']);
      }).catch(err => {
        this.isSubmitted = false;
    });
  }

  chronicDiseasesSelected(event, value): void {
    if (event.checked) {
      this.selectedDiseases.push(value);
    } else {
      this.selectedDiseases = this.selectedDiseases.filter(ds => ds !== value);
    }
    this.patientReq.chronic = this.selectedDiseases;
  }
}
