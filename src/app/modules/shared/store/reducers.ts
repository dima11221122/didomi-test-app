import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { uiReducer, UiState } from './ui/ui.reducer';

export const sharedFeatureKey = 'shared';

export interface SharedState {
  ui: UiState;
}

export const reducers: ActionReducerMap<SharedState> = {
  ui: uiReducer
};


export const metaReducers: MetaReducer<SharedState>[] = !environment.production ? [] : [];
