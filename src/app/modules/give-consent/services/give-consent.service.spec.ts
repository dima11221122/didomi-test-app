import { TestBed } from '@angular/core/testing';

import { GiveConsentService } from './give-consent.service';

describe('GiveConsentService', () => {
  let service: GiveConsentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiveConsentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
