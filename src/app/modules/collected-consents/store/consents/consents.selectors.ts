import { createFeatureSelector, createSelector } from '@ngrx/store';
import { consentsAdapter } from './consents.reducer';
import { selectCollectedConsents } from '../selector';

const { selectAll } = consentsAdapter.getSelectors();

export const selectConsentsStore = createSelector(
  selectCollectedConsents,
  store => store.consents
)

export const selectConsents = createSelector(
  selectConsentsStore,
  selectAll
);
