import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { ConsentsManagementEffects } from './consents-management.effects';
import { Consent } from '../../../shared/models/consent';
import { createConsent, createConsentFail } from './consents-management.actions';
import { ConsentsService } from '../../../shared/services/consents/consents.service';
import { hot } from 'jasmine-marbles';
import { showSuccessMessage } from '../../../shared/store/ui/ui.actions';

describe('CreateConsentEffects', () => {
  let actions$: Observable<any>;
  let effects: ConsentsManagementEffects;
  let consentServiceMock: {
    createConsent: jasmine.Spy
  };

  beforeEach(() => {
    consentServiceMock = jasmine.createSpyObj(['createConsent']);
    TestBed.configureTestingModule({
      providers: [
        ConsentsManagementEffects,
        provideMockActions(() => actions$),
        { provide: ConsentsService, useValue: consentServiceMock }
      ]
    });

    effects = TestBed.inject<ConsentsManagementEffects>(ConsentsManagementEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('createConsent$', () => {
    let consent: Consent;
    beforeEach(() => {
      consent = { receiveNewsletter: true };
      actions$ = hot('a', { a: createConsent({ payload: consent }) });

    });
    it('should dispatch showSuccessMessage if everything is ok', () => {
      consentServiceMock.createConsent.and.returnValue(of({}));
      const expectedObservable = hot('a', { a: showSuccessMessage({ payload: 'Consent is created!' }) });
      expect(effects.createConsent$).toBeObservable(expectedObservable);
      expect(consentServiceMock.createConsent).toHaveBeenCalledWith(consent);
    });

    it('should dispatch createConsentFail if create consent is failed', () => {
      consentServiceMock.createConsent.and.returnValue(throwError({ message: 'Error' }));
      const expectedObservable = hot('a', { a: createConsentFail({ payload: 'Error' }) });
      expect(effects.createConsent$).toBeObservable(expectedObservable);
    });
  });
});
