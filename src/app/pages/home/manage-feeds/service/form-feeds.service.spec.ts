import { TestBed } from '@angular/core/testing';

import { FormFeedsService } from './form-feeds.service';

describe('FormFeedsService', () => {
  let service: FormFeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
