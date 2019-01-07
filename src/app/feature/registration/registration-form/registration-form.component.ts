import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;

  countries = ['India', 'Bangladesh','UAE','USA', 'Germany', 'Italy', 'France'];

  sex  = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'others', viewValue: 'Others'}
  ];

  yesNo = [
    {value: 'yes', viewValue: 'YES'},
    {value: 'no', viewValue: 'NO'},
  ];

  constructor() {
    this.registrationForm = this.createFormGroup();
  }
  onSubmit() {
    console.log("In Submit");
  }

  reset(){
    console.log(" In Reset");
  }

  // Step 1
  createFormGroup() {
    return new FormGroup({

      firstName: new FormControl(),
      lastName: new FormControl(),
      emailId: new FormControl(),
      mobile: new FormControl(),
      sex: new FormControl(),
      insured: new FormControl(),
      martialStatus: new FormControl(),
      address1: new FormControl(),
      address2: new FormControl(),
      address3: new FormControl(),
      dateOfBirth: new FormControl(),
      toMeetDoctor: new FormControl(),
      referedDoctor: new FormControl(),
      alternateNumber :new FormControl(),
      contactNumber :new FormControl()

    });
  }

  ngOnInit() {} 

}


