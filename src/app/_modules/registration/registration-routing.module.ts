import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientRegistrationComponent, DoctorRegistrationComponent } from './_components';

const routes: Routes = [
  {path: 'patient', component: PatientRegistrationComponent},
  {path: 'doctor', component: DoctorRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
