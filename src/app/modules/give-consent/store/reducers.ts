import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { CreateConsentState, createConsentReducer } from './create-consent/create-consent.reducer';

export const giveConsentFeatureKey = 'giveConsent';

export interface GiveConsentState {
  createConsent: CreateConsentState;
}

export const reducers: ActionReducerMap<GiveConsentState> = {
  createConsent: createConsentReducer
};

export const metaReducers: MetaReducer<GiveConsentState>[] = !environment.production ? [] : [];
