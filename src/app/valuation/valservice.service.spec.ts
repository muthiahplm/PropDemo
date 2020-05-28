import { TestBed } from '@angular/core/testing';

import { ValserviceService } from './valservice.service';

describe('ValserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValserviceService = TestBed.get(ValserviceService);
    expect(service).toBeTruthy();
  });
});
