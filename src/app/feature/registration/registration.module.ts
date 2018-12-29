import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationPatientListComponent } from './registration-patient-list/registration-patient-list.component';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';


@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationFormComponent, RegistrationPatientListComponent, RegistrationHomeComponent]
})
export class RegistrationModule { }
