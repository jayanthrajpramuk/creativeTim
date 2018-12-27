import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPatientListComponent } from './registration-patient-list.component';

describe('RegistrationPatientListComponent', () => {
  let component: RegistrationPatientListComponent;
  let fixture: ComponentFixture<RegistrationPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
