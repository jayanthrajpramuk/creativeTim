import { MedicalTestEditComponent } from './medical-test-edit/medical-test-edit.component';
import { MedicalTestListComponent } from './medical-test-list/medical-test-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenenceHomeComponent } from './maintenence-home/maintenence-home.component';

const routes: Routes = [

  {
    path: 'operations',
    component: MaintenenceHomeComponent,
    children: [
      {
        path: 'testlist', component: MedicalTestListComponent
      },
      {
        path: 'testedit', component: MedicalTestEditComponent
      }
        ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenenceRoutingModule { }
