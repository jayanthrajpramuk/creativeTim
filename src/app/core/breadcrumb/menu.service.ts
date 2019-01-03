import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: 'home', path: './home', children:[]},
      { name: 'settings', path: './settings', children:[]},
      { name: 'profile', path: './profile', children:[]},

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


      
      { name: 'appointment', path: './appointment', children:[
        {name:'operations', path:'./operations', children:[
          {name:'appointment list', path:'./appointmentlist', children:[]},
          {name:'bookappointment', path:'./bookappointment', children:[]},
        ]},
      ]},

      { name: 'bill', path: './bill', children:[
        {name:'operations', path:'./operations', children:[
          {name:'generate bill', path:'./generatebill', children:[]},
          {name:'print bill', path:'./printbill', children:[]},
        ]},
      ]},

      { name: 'observation', path: './observation', children:[
        {name:'operations', path:'./operations', children:[
          {name:'add Observation', path:'./addobservation', children:[]},
          {name:'upload', path:'./uploadobservation', children:[]},
        ]},
      ]},


      { name: 'reports', path: './reports', children:[
        {name:'operations', path:'./operations', children:[
          {name:'forecast report', path:'./forecast', children:[]},
          {name:'daily', path:'./daily', children:[]},
          {name:'monthly', path:'./monthly', children:[]},
          {name:'due', path:'./due', children:[]},
        ]},
      ]},



    ];
        return menu;
  }
}
