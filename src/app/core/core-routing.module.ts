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
    children: [
      { path: '', loadChildren: '../feature/maintenence/maintenence.module#MaintenenceModule' }
      ]
  },
  { path: 'registration',    
    children: [
      { path: '', loadChildren: '../feature/registration/registration.module#RegistrationModule' }
      ]
  },
  { path: 'appointment',
    children: [
      { path: '', loadChildren: '../feature/appointment/appointment.module#AppointmentModule' }
    ]
  },
  { path: 'bill',
  children: [
    { path: '', loadChildren: '../feature/bill/bill.module#BillModule' }
  ]
},

{ path: 'observation',
children: [
  { path: '', loadChildren: '../feature/observation/observation.module#ObservationModule' }
]
},

{ path: 'reports',
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
