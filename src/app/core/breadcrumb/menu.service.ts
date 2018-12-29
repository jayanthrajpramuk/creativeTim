import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: 'home', path: './home', children:[]},

      { name: 'registration', path: './registration', children:[
        {name:'operations', path:'./operations', children:[
            {name:'form', path:'./form', children:[]},
            {name:'patientList', path:'./patientList', children:[]}
        ]}
      ]},


      { name: 'maintenence', path: './maintenence', children:[
        {name:'operations', path:'./operations', children:[
          {name:'testedit', path:'./testedit', children:[]},
          {name:'testlist', path:'./testlist', children:[]},
        ]},
      ]},
    ];
        return menu;
  }
}
