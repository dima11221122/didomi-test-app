import { createReducer, on } from '@ngrx/store';
import { setLoading } from './ui.actions';

export interface UiState {
  loading: boolean;
}

export const initialState: UiState = {
  loading: false
};


export const uiReducer = createReducer(
  initialState,
  on(setLoading, (state, { payload }) => ({...state, payload: payload}))
);

