import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenenceHomeComponent } from './maintenence-home.component';

describe('MaintenenceHomeComponent', () => {
  let component: MaintenenceHomeComponent;
  let fixture: ComponentFixture<MaintenenceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenenceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenenceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
