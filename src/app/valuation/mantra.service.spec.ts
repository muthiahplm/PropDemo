import { TestBed } from '@angular/core/testing';

import { MantraService } from './mantra.service';

describe('MantraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MantraService = TestBed.get(MantraService);
    expect(service).toBeTruthy();
  });
});
