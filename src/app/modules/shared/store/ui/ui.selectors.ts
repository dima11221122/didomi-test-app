import { createSelector } from '@ngrx/store';
import { selectShared } from '../selector';

export const selectUiState = createSelector(selectShared, state => state.ui)

export const selectLoading = createSelector(selectUiState, state => state.loading);
