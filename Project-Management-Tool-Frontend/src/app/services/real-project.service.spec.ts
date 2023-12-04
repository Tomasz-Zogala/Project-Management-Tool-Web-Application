import { TestBed } from '@angular/core/testing';

import { RealProjectService } from './real-project.service';

describe('RealProjectService', () => {
  let service: RealProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
