import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTestEditComponent } from './medical-test-edit.component';

describe('MedicalTestEditComponent', () => {
  let component: MedicalTestEditComponent;
  let fixture: ComponentFixture<MedicalTestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
