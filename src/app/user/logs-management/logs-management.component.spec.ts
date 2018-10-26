import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsManagementComponent } from './logs-management.component';

describe('LogsManagementComponent', () => {
  let component: LogsManagementComponent;
  let fixture: ComponentFixture<LogsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
