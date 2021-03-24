import { TestBed } from '@angular/core/testing';

import { RepresentantsService } from './representants.service';

describe('RepresentantsService', () => {
  let service: RepresentantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepresentantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
