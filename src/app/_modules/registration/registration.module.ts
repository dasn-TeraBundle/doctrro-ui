import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationRoutingModule} from './registration-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PatientRegistrationComponent, DoctorRegistrationComponent } from './_components';
import {SharedMaterialModule} from '../shared/shared-material/shared-material.module';
import {RegistrationService} from "./_services/registration.service";



@NgModule({
  declarations: [PatientRegistrationComponent, DoctorRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedMaterialModule,
    RegistrationRoutingModule
  ],
  providers: [RegistrationService]
})
export class RegistrationModule { }
