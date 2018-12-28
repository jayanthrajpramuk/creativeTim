import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenenceOperationsComponent } from './maintenence-operations.component';

describe('MaintenenceOperationsComponent', () => {
  let component: MaintenenceOperationsComponent;
  let fixture: ComponentFixture<MaintenenceOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenenceOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenenceOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
