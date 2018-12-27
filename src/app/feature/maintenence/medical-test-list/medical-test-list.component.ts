import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-test-list',
  templateUrl: './medical-test-list.component.html',
  styleUrls: ['./medical-test-list.component.scss']
})
export class MedicalTestListComponent implements OnInit {

  constructor() { 
    console.log("In list ");
  }

  ngOnInit() {
    console.log("In list ");
  }

}
