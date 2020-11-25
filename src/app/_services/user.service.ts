import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../_models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUser(): Observable<User> {
    const authToken = sessionStorage.getItem('authToken');
    const headers = new HttpHeaders({Authorization : 'Bearer ' + authToken});
    const options = {headers: headers};

    return this._http.get<User>('/user-service/me', options);
  }
}
