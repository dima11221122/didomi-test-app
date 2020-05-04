import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { ConsentsEffects } from './consents.effects';
import { ConsentsService } from '../../../shared/services/consents/consents.service';
import { loadConsents, loadConsentsFail, loadConsentsSuccess } from './consents.actions';
import { Consent } from '../../../shared/models/consent';
import { cold } from 'jasmine-marbles';

describe('ConsentsEffects', () => {
  let actions$: Observable<any>;
  let effects: ConsentsEffects;
  let consentsServiceMock: {
    getConsents: jasmine.Spy
  };

  beforeEach(() => {
    consentsServiceMock = jasmine.createSpyObj(['getConsents']);
    TestBed.configureTestingModule({
      providers: [
        ConsentsEffects,
        provideMockActions(() => actions$),
        { provide: ConsentsService, useValue: consentsServiceMock }
      ]
    });

    effects = TestBed.inject(ConsentsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadConsents$', () => {
    let consents: Consent[];

    beforeEach(() => {
      consents = [
        { id: 1, name: 'John', targetedAds: true }
      ];
      actions$ = cold('a', { a: loadConsents() });
    });

    it('should dispatch loadConsentsSuccess action if consents are loaded correctly', () => {
      consentsServiceMock.getConsents.and.returnValue(of(consents));
      const expectedObservable = cold('a', { a: loadConsentsSuccess({ payload: consents }) });
      expect(effects.loadConsents$).toBeObservable(expectedObservable);
    });

    it('should dispatch loadConsentsFail if loading of consents failed', () => {
      consentsServiceMock.getConsents.and.returnValue(throwError({ message: 'Error' }));
      const expectedObservable = cold('a', { a: loadConsentsFail({ payload: 'Error' }) });
      expect(effects.loadConsents$).toBeObservable(expectedObservable);
    });
  });
});
