import { createFeatureSelector } from '@ngrx/store';
import { consentsFeatureKey, ConsentsState } from './consents/consents.reducer';
import { collectedConsentsFeatureKey, CollectedConsentsState } from './reducers';

export const selectCollectedConsents = createFeatureSelector<CollectedConsentsState>(collectedConsentsFeatureKey);
