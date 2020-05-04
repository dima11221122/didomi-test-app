import { createReducer, on } from '@ngrx/store';
import { setLoading } from './ui.actions';

export interface UiState {
  /**
   * Field represents the state of loading bar at the top of the page (show or hide)
   */
  loading: boolean;
}

export const initialState: UiState = {
  loading: false
};


export const uiReducer = createReducer(
  initialState,
  on(setLoading, (state, { payload }) => ({...state, loading: payload}))
);

