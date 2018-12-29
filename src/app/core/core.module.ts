import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from '../core/layout/admin-layout.component';
import { DashboardComponent } from '../feature/dashboard/dashboard.component';
import { UserProfileComponent } from '../feature/user-profile/user-profile.component';
import { TableListComponent } from '../feature/table-list/table-list.component';
import { TypographyComponent } from '../feature/typography/typography.component';
import { IconsComponent } from '../feature/icons/icons.component';
import { MapsComponent } from '../feature/maps/maps.component';
import { NotificationsComponent } from '../feature/notifications/notifications.component';
import { UpgradeComponent } from '../feature/upgrade/upgrade.component';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MenuService } from './breadcrumb/menu.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    AdminLayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    BreadcrumbComponent,
    HomeComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  providers:[
    MenuService
  ]
})
export class CoreModule { }
