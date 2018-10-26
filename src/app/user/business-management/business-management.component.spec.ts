import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessManagementComponent } from './business-management.component';

describe('BusinessManagementComponent', () => {
  let component: BusinessManagementComponent;
  let fixture: ComponentFixture<BusinessManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
