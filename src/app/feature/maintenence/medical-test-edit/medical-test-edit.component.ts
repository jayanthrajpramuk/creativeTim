import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-test-edit',
  templateUrl: './medical-test-edit.component.html',
  styleUrls: ['./medical-test-edit.component.scss']
})
export class MedicalTestEditComponent implements OnInit {

  constructor() {
    console.log("In edit ");
   }

  ngOnInit() {
    console.log("In edit ");
  }

}
