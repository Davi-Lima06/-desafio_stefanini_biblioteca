import { TestBed } from '@angular/core/testing';

import { ValidarDataService } from './validar-data.service';

describe('ValidarDataService', () => {
  let service: ValidarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
