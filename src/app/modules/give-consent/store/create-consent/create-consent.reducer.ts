import { Action, createReducer, on } from '@ngrx/store';


export const createConsentFeatureKey = 'createConsent';

export interface CreateConsentState {
  error: string;
}

export const initialState: CreateConsentState = {
  error: null
};


export const reducer = createReducer(
  initialState,

);

