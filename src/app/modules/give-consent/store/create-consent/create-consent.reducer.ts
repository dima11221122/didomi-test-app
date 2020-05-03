import { Action, createReducer, on } from '@ngrx/store';
import { createConsentFail } from './create-consent.actions';


export const createConsentFeatureKey = 'createConsent';

export interface CreateConsentState {
  error: string;
}

export const initialState: CreateConsentState = {
  error: null
};


export const createConsentReducer = createReducer(
  initialState,
  on(createConsentFail, (state, { payload }) => ({ ...state, error: payload }))
);

