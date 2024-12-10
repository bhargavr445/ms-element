import { TestBed } from '@angular/core/testing';

import { PrrService } from './prr.service';

describe('PrrService', () => {
  let service: PrrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
