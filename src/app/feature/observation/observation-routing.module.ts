import { ObservationHomeComponent } from './observation-home/observation-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
       children: [
      {
        path: 'addobservation', component: DiagnoseComponent
      },
      {
        path: 'uploadobservation', component: UploadComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationRoutingModule { }
