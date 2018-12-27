import { MedicalTestEditComponent } from './medical-test-edit/medical-test-edit.component';
import { MedicalTestListComponent } from './medical-test-list/medical-test-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '', redirectTo:'testedit', pathMatch: 'full'
      },
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
