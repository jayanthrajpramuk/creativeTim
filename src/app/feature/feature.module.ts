import { MaintenenceModule } from './maintenence/maintenence.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaintenenceModule,
    RegistrationModule
  ],
  declarations: []
})
export class FeatureModule { }
