import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';


@NgModule({
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ],
  declarations: [ 
    AppointmentListComponent, 
    BookAppointmentComponent,
    AppointmentHomeComponent]
})
export class AppointmentModule { }
