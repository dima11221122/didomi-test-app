import { TestBed } from '@angular/core/testing';

import { GiveConsentService } from './give-consent.service';
import { Store } from '@ngrx/store';
import { Consent } from '../../shared/models/consent';
import { createConsent } from '../store/create-consent/create-consent.actions';

describe('GiveConsentService', () => {
  let service: GiveConsentService;
  let storeMock: {
    dispatch: jasmine.Spy
  };
  beforeEach(() => {
    storeMock = jasmine.createSpyObj(['dispatch']);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock }
      ]
    });
    service = TestBed.inject(GiveConsentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#giveConsent', () => {
    it('should dispatch event', () => {
      const data: Consent = { targetedAds: true };
      service.giveConsent(data);
      expect(storeMock.dispatch).toHaveBeenCalledWith(createConsent({ payload: data }));
    });
  });
});
