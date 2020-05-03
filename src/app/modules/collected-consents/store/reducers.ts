import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { consentsReducer, ConsentsState } from './consents/consents.reducer';

export const collectedConsentsFeatureKey = 'collectedConsents';

export interface CollectedConsentsState {
  consents: ConsentsState;
}

export const reducers: ActionReducerMap<CollectedConsentsState> = {
  consents: consentsReducer
};


export const metaReducers: MetaReducer<CollectedConsentsState>[] = !environment.production ? [] : [];
