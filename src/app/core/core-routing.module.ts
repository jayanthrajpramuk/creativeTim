import { BillHomeComponent } from './../feature/bill/bill-home/bill-home.component';
import { MaintenenceHomeComponent } from './../feature/maintenence/maintenence-home/maintenence-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../feature/dashboard/dashboard.component';
import { UserProfileComponent } from '../feature/user-profile/user-profile.component';
import { TableListComponent } from '../feature/table-list/table-list.component';
import { TypographyComponent } from '../feature/typography/typography.component';
import { IconsComponent } from '../feature/icons/icons.component';
import { MapsComponent } from '../feature/maps/maps.component';
import { NotificationsComponent } from '../feature/notifications/notifications.component';
import { UpgradeComponent } from '../feature/upgrade/upgrade.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import {AppointmentHomeComponent} from "../feature/appointment/appointment-home/appointment-home.component";
import { RegistrationHomeComponent } from 'app/feature/registration/registration-home/registration-home.component';
import { ObservationHomeComponent } from 'app/feature/observation/observation-home/observation-home.component';
import { ReportsHomeComponent } from 'app/feature/reports/reports-home/reports-home.component';

export const LayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }

  /* { path: 'dashboard',      component: DashboardComponent },
   { path: 'user-profile',   component: UserProfileComponent },
   { path: 'table-list',     component: TableListComponent },
   { path: 'typography',     component: TypographyComponent },
   { path: 'icons',          component: IconsComponent },
   { path: 'maps',           component: MapsComponent },
   { path: 'upgrade',        component: UpgradeComponent },*/

  { path: 'home',      component: HomeComponent },

  { path: 'notifications',  component: NotificationsComponent },

  { path: 'login',          component: LoginComponent },

  { path: 'profile',        component: ProfileComponent },

  { path: 'settings',       component: SettingsComponent },

  { path: 'maintenence',
    component: MaintenenceHomeComponent,
    children: [
      { path: '', loadChildren: '../feature/maintenence/maintenence.module#MaintenenceModule' }
    ]
  },
  { path: 'registration',
    component: RegistrationHomeComponent,
    children: [
      { path: '', loadChildren: '../feature/registration/registration.module#RegistrationModule' }
    ]
  },
  { path: 'appointment',
    component: AppointmentHomeComponent,
    children: [
      { path: '', loadChildren: '../feature/appointment/appointment.module#AppointmentModule' }
    ]
  },
  { path: 'bill',
   component: BillHomeComponent,
    children: [
      { path: '', loadChildren: '../feature/bill/bill.module#BillModule' }
    ]
  },

  { path: 'observation',
    component: ObservationHomeComponent,
    children: [
      { path: '', loadChildren: '../feature/observation/observation.module#ObservationModule' }
    ]
  },

  { path: 'reports',
    component: ReportsHomeComponent,
    children: [
      { path: '', loadChildren: '../feature/reports/reports.module#ReportsModule' }
    ]
  },

];



@NgModule({
  imports: [RouterModule.forChild(LayoutRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
