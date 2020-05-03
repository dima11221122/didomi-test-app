import { Injectable } from '@angular/core';
import { Consent } from '../../shared/models/consent';
import { Store } from '@ngrx/store';
import { createConsent } from '../store/create-consent/create-consent.actions';

@Injectable({
  providedIn: 'root'
})
export class GiveConsentService {

  constructor(
    private store: Store
  ) {
  }

  // TODO: not implemented
  giveConsent(consent: Consent) {
    this.store.dispatch(createConsent({ payload: consent }));
  }
}
