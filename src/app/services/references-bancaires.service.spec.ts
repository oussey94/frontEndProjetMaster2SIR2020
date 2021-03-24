import { TestBed } from '@angular/core/testing';

import { ReferencesBancairesService } from './references-bancaires.service';

describe('ReferencesBancairesService', () => {
  let service: ReferencesBancairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferencesBancairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
