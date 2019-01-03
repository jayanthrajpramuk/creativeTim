import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservationRoutingModule } from './observation-routing.module';

import { DiagnoseComponent } from './diagnose/diagnose.component';
import { ObservationHomeComponent } from './observation-home/observation-home.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    ObservationRoutingModule
  ],
  declarations: [DiagnoseComponent, ObservationHomeComponent, UploadComponent]
})
export class ObservationModule { }
