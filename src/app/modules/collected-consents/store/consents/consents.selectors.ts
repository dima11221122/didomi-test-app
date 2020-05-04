import { createFeatureSelector, createSelector } from '@ngrx/store';
import { calculateTotalPagesCount, consentsAdapter, ConsentsState, PAGE_SIZE } from './consents.reducer';
import { selectCollectedConsents } from '../selector';

const { selectAll } = consentsAdapter.getSelectors();

export const selectConsentsStore = createSelector(
  selectCollectedConsents,
  store => store.consents
)

export const selectConsents = createSelector(
  selectConsentsStore,
  (consentsState) => {
    const currentIndex = consentsState.currentPage * PAGE_SIZE;
    return selectAll(consentsState).slice(currentIndex, currentIndex + PAGE_SIZE)
  }
);

export const selectTotalPages = createSelector(
  selectConsentsStore,
  calculateTotalPagesCount
)

export const selectCurrentPage = createSelector(
  selectConsentsStore,
  state => state.currentPage
)

export const hasNextPage = createSelector(
  selectConsentsStore,
  (consentsState) => {
    const totalPagesCount = calculateTotalPagesCount(consentsState);
    return (consentsState.currentPage + 1) < totalPagesCount;
  }
)

export const hasPrevPage = createSelector(
  selectConsentsStore,
  (consentsState) => consentsState.currentPage > 0
)
