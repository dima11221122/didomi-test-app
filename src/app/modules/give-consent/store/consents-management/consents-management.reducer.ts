import { Action, createReducer, on } from '@ngrx/store';
import { createConsentFail } from './consents-management.actions';


export const createConsentFeatureKey = 'consentsManagement';

export interface ConsentsManagementState {
  error: string;
}

export const initialState: ConsentsManagementState = {
  error: null
};


export const consentsManagementReducer = createReducer(
  initialState,
  on(createConsentFail, (state, { payload }) => ({ ...state, error: payload }))
);

