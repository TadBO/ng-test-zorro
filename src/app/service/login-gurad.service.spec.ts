import { TestBed } from '@angular/core/testing';

import { LoginGuradService } from './login-gurad.service';

describe('LoginGuradService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginGuradService = TestBed.get(LoginGuradService);
    expect(service).toBeTruthy();
  });
});
