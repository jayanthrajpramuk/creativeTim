import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentReportComponent } from './paitent-report.component';

describe('PaitentReportComponent', () => {
  let component: PaitentReportComponent;
  let fixture: ComponentFixture<PaitentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaitentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaitentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
