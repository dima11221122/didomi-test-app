import { Injectable } from '@angular/core';
import { Consent } from '../../shared/models/consent';
import { Store } from '@ngrx/store';
import { createConsent } from '../store/consents-management/consents-management.actions';

/**
 * Proxy service for working with {@link ConsentsManagementState} store
 */
@Injectable({
  providedIn: 'root'
})
export class ConsentsManagementService {

  constructor(
    private store: Store
  ) {
  }

  /**
   * Initiate process of creating a new consent
   * @param consent - New consent
   */
  giveConsent(consent: Consent) {
    this.store.dispatch(createConsent({ payload: consent }));
  }
}
