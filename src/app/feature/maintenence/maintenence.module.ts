import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenenceRoutingModule } from './maintenence-routing.module';
import { MedicalTestListComponent } from './medical-test-list/medical-test-list.component';
import { MedicalTestEditComponent } from './medical-test-edit/medical-test-edit.component';
import { MaintenenceHomeComponent } from './maintenence-home/maintenence-home.component';
import { MaintenenceOperationsComponent } from './maintenence-operations/maintenence-operations.component';

@NgModule({
  imports: [
    CommonModule,
    MaintenenceRoutingModule
  ],
  declarations: [MedicalTestListComponent, 
    MedicalTestEditComponent, MaintenenceHomeComponent, MaintenenceOperationsComponent]
})
export class MaintenenceModule { }
