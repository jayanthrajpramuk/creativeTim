import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationHomeComponent } from './observation-home.component';

describe('ObservationHomeComponent', () => {
  let component: ObservationHomeComponent;
  let fixture: ComponentFixture<ObservationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
