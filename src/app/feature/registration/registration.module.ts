import { MaterialModule } from './../../shared/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationPatientListComponent } from './registration-patient-list/registration-patient-list.component';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationFormComponent, RegistrationPatientListComponent, RegistrationHomeComponent]
})
export class RegistrationModule { }
