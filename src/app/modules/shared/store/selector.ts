import { createFeatureSelector } from '@ngrx/store';
import { sharedFeatureKey, SharedState } from './reducers';

export const selectShared = createFeatureSelector<SharedState>(sharedFeatureKey);
