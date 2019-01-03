import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'operations',
    component: AppointmentHomeComponent,
    children: [
      {
        path: 'appointmentlist', component: AppointmentListComponent
      },
      {
        path: 'bookappointment', component: BookAppointmentComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
