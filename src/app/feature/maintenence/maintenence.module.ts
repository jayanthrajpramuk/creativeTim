import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenenceRoutingModule } from './maintenence-routing.module';
import { MedicalTestListComponent } from './medical-test-list/medical-test-list.component';
import { MedicalTestEditComponent } from './medical-test-edit/medical-test-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MaintenenceRoutingModule
  ],
  declarations: [MedicalTestListComponent, 
    MedicalTestEditComponent]
})
export class MaintenenceModule { }
