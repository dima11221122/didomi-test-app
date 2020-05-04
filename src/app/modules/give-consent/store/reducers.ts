import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { consentsManagementReducer, ConsentsManagementState } from './consents-management/consents-management.reducer';

export const giveConsentFeatureKey = 'giveConsent';

export interface GiveConsentState {
  consentsManagement: ConsentsManagementState;
}

export const reducers: ActionReducerMap<GiveConsentState> = {
  consentsManagement: consentsManagementReducer
};

export const metaReducers: MetaReducer<GiveConsentState>[] = !environment.production ? [] : [];
