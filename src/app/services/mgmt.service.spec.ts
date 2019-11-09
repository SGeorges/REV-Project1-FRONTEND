import { TestBed } from '@angular/core/testing';

import { MgmtService } from './mgmt.service';

describe('MgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MgmtService = TestBed.get(MgmtService);
    expect(service).toBeTruthy();
  });
});
