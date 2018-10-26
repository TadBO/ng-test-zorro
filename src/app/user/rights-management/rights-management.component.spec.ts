import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsManagementComponent } from './rights-management.component';

describe('RightsManagementComponent', () => {
  let component: RightsManagementComponent;
  let fixture: ComponentFixture<RightsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
