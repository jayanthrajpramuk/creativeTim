
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationPatientListComponent } from './registration-patient-list/registration-patient-list.component';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';

const routes: Routes = [{
  path:'',
  children: [
    {
      path:'form', component:RegistrationFormComponent
    },
    {
      path:'patientList', component:RegistrationPatientListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
