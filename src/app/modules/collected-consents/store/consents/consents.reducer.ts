import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Consent } from '../../../shared/models/consent';
import { loadConsentsSuccess, nextPage, previousPage, setPage } from './consents.actions';


export const consentsFeatureKey = 'consents';
export const PAGE_SIZE = 2;

export interface ConsentsState extends EntityState<Consent> {
  currentPage: number;
}

export const consentsAdapter = createEntityAdapter<Consent>({
  selectId: consent => consent.id
});

export const initialState: ConsentsState = consentsAdapter.getInitialState({
  currentPage: 0
});

const calculateTotalPagesCount = (state: ConsentsState): number => {
  const numberOfEntities = Object.values(state.entities).length;
  return Math.floor(numberOfEntities / PAGE_SIZE) + (numberOfEntities % PAGE_SIZE === 0 ? 0 : 1);
};

export const consentsReducer = createReducer(
  initialState,
  on(loadConsentsSuccess, (state, { payload }) => consentsAdapter.addMany(payload, state)),
  on(nextPage, state => {
    const totalPagesCount = calculateTotalPagesCount(state);
    const { currentPage } = state;
    return (currentPage + 1) >= totalPagesCount ? state : { ...state, currentPage: currentPage + 1 };
  }),
  on(previousPage, state => {
    return state.currentPage === 0 ? state : { ...state, currentPage: state.currentPage - 1 };
  }),
  on(setPage, (state, { payload }) => {
    const totalPagesCount = calculateTotalPagesCount(state);
    return (payload >= 0 && payload < totalPagesCount) ? { ...state, currentPage: payload } : state;
  })
);

