import { createAction, props } from '@ngrx/store';
import { Consent } from '../../../shared/models/consent';

export const createConsent = createAction(
  '[CreateConsent] create consent',
  props<{payload: Consent}>()
);

export const createConsentFail = createAction(
  '[CreateConsent] create consent fail',
  props<{ payload: string }>()
);



