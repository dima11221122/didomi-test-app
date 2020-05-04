import { TestBed } from '@angular/core/testing';
import { ConsentsManagementService } from './consents-management.service';
import { Store } from '@ngrx/store';
import { Consent } from '../../shared/models/consent';
import { createConsent } from '../store/consents-management/consents-management.actions';

describe('ConsentsManagementService', () => {
  let service: ConsentsManagementService;
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
    service = TestBed.inject(ConsentsManagementService);
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
