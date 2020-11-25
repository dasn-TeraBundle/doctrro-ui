import {Component, OnDestroy, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private authSubscription: any;
  private registrationType = -1;

  constructor(private router: Router,
              private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authState.subscribe((user) => {
      const loggedIn = (user != null);
      sessionStorage.setItem('loggedIn', '' + loggedIn);
      sessionStorage.setItem('authToken', user.authToken);

      if (this.registrationType === 0) {
        this.router.navigate(['/register/patient']);
      } else {
        this.router.navigate([''], {queryParams: {q: this.registrationType}});
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  registerAsPatient(): void {
    this.registrationType = 0;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  registerAsDoctor(): void {
    this.registrationType = 1;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
