import { TestBed } from '@angular/core/testing';

import { MandatairesService } from './mandataires.service';

describe('MandatairesService', () => {
  let service: MandatairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandatairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
