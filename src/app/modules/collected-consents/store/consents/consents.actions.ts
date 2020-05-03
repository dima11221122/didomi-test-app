import { createAction, props } from '@ngrx/store';
import { Consent } from '../../../shared/models/consent';

export const loadConsents = createAction(
  '[Consents] load consents'
);

export const loadConsentsSuccess = createAction(
  '[Consents] load consents success',
  props<{ payload: Consent[] }>()
);

export const loadConsentsFail = createAction(
  '[Consents] load consents fail',
  props<{ payload: string }>()
);

export const nextPage = createAction(
  '[Consents] next page'
)

export const previousPage = createAction(
  '[Consents] previous page'
)

export const setPage = createAction(
  '[Consents] set page',
  props<{ payload: number }>()
)
