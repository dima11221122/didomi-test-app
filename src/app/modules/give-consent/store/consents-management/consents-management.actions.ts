import { createAction, props } from '@ngrx/store';
import { Consent } from '../../../shared/models/consent';

/**
 * Action for initiate process of creating a consent entity
 */
export const createConsent = createAction(
  '[CreateConsent] create consent',
  props<{payload: Consent}>()
);

/**
 * Action of consent creating process failure
 */
export const createConsentFail = createAction(
  '[CreateConsent] create consent fail',
  props<{ payload: string }>()
);



