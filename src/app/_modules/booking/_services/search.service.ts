import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DoctorSearchResponse, SearchFilters} from "../_models";
import {Observable} from "rxjs";

const SEARCH_SERVICE = '/search-service/';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  searchDoctor(criteria: SearchFilters): Observable<DoctorSearchResponse[]> {
    let searchParams = `lat=${criteria.loc.lat}&lon=${criteria.loc.lon}&radius=${criteria.radius}`;
    if (criteria.speciality) {
      searchParams = `${searchParams}&speciality=${criteria.speciality}`;
    }
    const url = `${SEARCH_SERVICE}doctor?${searchParams}`;

    return this.http.get<DoctorSearchResponse[]>(url);
  }
}
