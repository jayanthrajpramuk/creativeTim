import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
 /*   { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },*/
    { path: '/home', title: 'Home',  icon: 'home', class: '' },
    { path: '/registration/operations', title: 'Registration',  icon: 'assignment', class: '' },
    { path: '/appointment/operations', title: 'Appointment',  icon: 'date_range', class: '' },
    { path: '/bill/operations', title: 'Bill',  icon: 'star', class: '' },
    { path: '/observation/operations', title: 'Observation',  icon: 'note_add', class: '' },
    { path: '/reports/operations', title: 'Reports',  icon: 'bar_chart', class: '' },
    { path: '/maintenence/operations', title: 'Maintenence',  icon: 'control_point_duplicate', class: '' }/*,
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
