import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {RegistrationGuard} from './_guards/registration.guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./_modules/registration/registration.module')
      .then(m => m.RegistrationModule),
    canActivate: [RegistrationGuard]
  },
  {path: 'login', component: LoginComponent},
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      {
        path: 'booking',
        loadChildren: () => import('./_modules/booking/booking.module')
          .then(m => m.BookingModule)
      },
      {
        path: 'appnt',
        loadChildren: () => import('./_modules/appointment/appointment.module')
          .then(m => m.AppointmentModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
