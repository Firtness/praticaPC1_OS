import { TestBed } from '@angular/core/testing';

import { VenuesApiService } from './venues-api.service';

describe('VenueApiService', () => {
  let service: VenuesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenuesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
