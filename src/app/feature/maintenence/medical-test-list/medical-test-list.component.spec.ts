import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTestListComponent } from './medical-test-list.component';

describe('MedicalTestListComponent', () => {
  let component: MedicalTestListComponent;
  let fixture: ComponentFixture<MedicalTestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
