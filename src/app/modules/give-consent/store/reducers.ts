import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';

export const giveConsentFeatureKey = 'giveConsent';

export interface GiveConsentState {

}

export const reducers: ActionReducerMap<GiveConsentState> = {

};


export const metaReducers: MetaReducer<GiveConsentState>[] = !environment.production ? [] : [];
