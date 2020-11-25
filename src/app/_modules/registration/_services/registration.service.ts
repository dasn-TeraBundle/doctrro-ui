import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PatientRequest} from "../_models";
import {Observable} from "rxjs";

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerPatient(patientReq: PatientRequest): Observable<any> {
    const authToken = sessionStorage.getItem('authToken');
    const headers = new HttpHeaders({Authorization : `Bearer ${authToken}`});
    const options = {headers};

    return this.http.post<any>('/patient-service/', patientReq, options);

  }
}
