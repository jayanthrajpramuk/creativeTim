import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationPatientListComponent } from './registration-patient-list/registration-patient-list.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationFormComponent, RegistrationPatientListComponent]
})
export class RegistrationModule { }
