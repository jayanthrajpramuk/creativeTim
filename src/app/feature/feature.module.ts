import { MaintenenceModule } from './maintenence/maintenence.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureRoutingModule } from './feature-routing.module';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaintenenceModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationModule
  ],
  declarations: []
})
export class FeatureModule { }
