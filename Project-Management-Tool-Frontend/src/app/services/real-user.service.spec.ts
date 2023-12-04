import { TestBed } from '@angular/core/testing';

import { RealUserService } from './real-user.service';

describe('RealUserService', () => {
  let service: RealUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
