import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './_components';
import {AppointmentRoutingModule} from "./appointment-routing.module";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,

    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
