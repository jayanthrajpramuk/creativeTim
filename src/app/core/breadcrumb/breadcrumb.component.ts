import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];
  temp: Array<any> = [];

  constructor(private _router: Router, private menuService: MenuService) {
    console.log("in Breadcrumbs");
  }

  ngOnInit() {
    console.log("in Breadcrumbs");
      this.menu = this.menuService.getMenu();
    this.listenRouting();
  }

  
  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        
        target = this.menu;
        this.breadcrumbList.length = 0;
      
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
          
          
          target = target.find(page => page.path.slice(2) === router);
         
          this.breadcrumbList.push({
            name: target.name,
            
            path: (index === 0) ? target.path : `${this.breadcrumbList[index-1].path}/${target.path.slice(2)}`
          });
          
          
          if (index+1 !== routerList.length) {
            target = target.children;
          }
        });

        this.temp = this.breadcrumbList;
        
        for(let i =0; i<this.temp.length; i++) {
            let item = this.temp[i];
            item.path = item.path.replace('.','');
        }

        this.breadcrumbList = this.temp;
        
          console.log(this.breadcrumbList);
          // this.breadcrumbList =[
          //   {name: "maintenence", path: "/maintenence"},
          //    {name: "operations", path: "/maintenence/operations"},
          //    {name: "testlist", path: "/maintenence/operations/testlist"}
          //          ]
      }
    });
  }
}
