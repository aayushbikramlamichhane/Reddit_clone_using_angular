import { TestBed } from '@angular/core/testing';

import { FeedsApiServiceService } from './feeds-api-service.service';

describe('FeedsApiServiceService', () => {
  let service: FeedsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
