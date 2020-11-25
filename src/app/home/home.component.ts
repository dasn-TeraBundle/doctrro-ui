import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocialAuthService} from "angularx-social-login";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "../_models/user";
import {selecFeatureUser} from "../store/state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  isPatient = false;
  activeTab = '';

  private user: User;
  private userSub: any;
  private authServiceSub: any;

  constructor(private authService: SocialAuthService,
              private store: Store,
              private router: Router) { }

  ngOnInit(): void {
    this.authServiceSub = this.authService.authState.subscribe((user) => {
      console.log('==========');
      sessionStorage.setItem('authToken', user.authToken);
    });

    this.userSub = this.store.select(selecFeatureUser)
      .subscribe(user => {
        this.user = user;
        this.isPatient = user.roles.includes('ROLE_PATIENT');
        this.activeTab = this.isPatient ? 'BOOK_APT' : 'APTS';
        this.navigateTabs(this.activeTab);
      });
  }

  navigateTabs(action: string): void {
    this.activeTab = action;
    if (action === 'BOOK_APT') {
      this.router.navigate(['/booking']);
    } else {
      this.router.navigate(['/appnt']);
    }
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.authServiceSub.unsubscribe();
  }
}
