import { TestBed } from '@angular/core/testing';

import { EmpSrviceService } from './emp-srvice.service';

describe('EmpSrviceService', () => {
  let service: EmpSrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpSrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
