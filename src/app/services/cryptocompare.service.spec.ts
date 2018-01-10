import { TestBed, inject } from '@angular/core/testing';

import { CryptocompareService } from './cryptocompare.service';

describe('CryptocompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptocompareService]
    });
  });

  it('should be created', inject([CryptocompareService], (service: CryptocompareService) => {
    expect(service).toBeTruthy();
  }));
});
