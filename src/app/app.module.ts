import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";
import {SharedMaterialModule} from "./_modules/shared/shared-material/shared-material.module";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import * as fromUser from './store/user.reducer';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    SocialLoginModule,
    SharedMaterialModule,

    StoreModule.forRoot({
      user: fromUser.reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),


    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([])
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '136175994119-fbjoj7v7heistpgdo95aruijrprgo9s5.apps.googleusercontent.com'
            ),
          }
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
