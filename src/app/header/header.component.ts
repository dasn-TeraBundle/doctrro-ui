import {Component, Input, OnInit} from '@angular/core';
import {User} from "../_models/user";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selecFeatureUser} from "../store/state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.user$ = this.store.select(selecFeatureUser);
  }

}
