import { TestBed } from '@angular/core/testing';

import { LeaveGuradService } from './leave-gurad.service';

describe('LeaveGuradService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaveGuradService = TestBed.get(LeaveGuradService);
    expect(service).toBeTruthy();
  });
});
