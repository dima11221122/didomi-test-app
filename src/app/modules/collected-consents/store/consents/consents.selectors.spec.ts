import { Consent } from '../../../shared/models/consent';
import * as faker from 'faker';
import { consentsAdapter, consentsReducer, ConsentsState, initialState } from './consents.reducer';
import { setPage } from './consents.actions';
import { hasNextPage, hasPrevPage, selectConsents, selectTotalPages } from './consents.selectors';

describe('Consents selectors', () => {
  let consents: Consent[];
  let prevState: ConsentsState;
  beforeEach(() => {
    consents = [...Array(10)].map((_, index) => ({
      id: index,
      name: faker.name.findName(),
      email: faker.internet.email(),
      targetedAds: faker.random.boolean(),
      trackVisits: faker.random.boolean(),
      receiveNewsletter: faker.random.boolean()
    }));
    prevState = consentsAdapter.setAll(consents, initialState);
  });

  it('selectConsents should return slice of consents based on currentPage', () => {
    const secondState = consentsReducer(prevState, setPage({payload: 2}));
    expect(selectConsents.projector(secondState)).toEqual(consents.slice(4, 6));
  });

  it('selectTotalPages should return total count of pages', () => {
    expect(selectTotalPages.projector(prevState)).toEqual(5);
  });

  describe('hasNextPage', () => {
    it('should return true if current page in the middle of pages range', () => {
      const secondState = consentsReducer(prevState, setPage({payload: 2}));
      expect(hasNextPage.projector(secondState)).toEqual(true);
    });

    it('should return true if current page equals 0', () => {
      const secondState = consentsReducer(prevState, setPage({payload: 0}));
      expect(hasNextPage.projector(secondState)).toEqual(true);
    });

    it('should return false if there are not pages ahead', () => {
      const secondState = consentsReducer(prevState, setPage({payload: 4}));
      expect(hasNextPage.projector(secondState)).toEqual(false);
    });
  });

  describe('hasPrevStep', () => {
    it('should return true if current page in the middle of pages range', () => {
      const secondState = consentsReducer(prevState, setPage({payload: 2}));
      expect(hasPrevPage.projector(secondState)).toEqual(true);
    });

    it('should return true if there are not pages ahead', () => {
      const secondState = consentsReducer(prevState, setPage({payload: 4}));
      expect(hasPrevPage.projector(secondState)).toEqual(true);
    });

    it('should return false if current page equals 0', () => {
      const secondState = consentsReducer(prevState, setPage({payload: 0}));
      expect(hasPrevPage.projector(secondState)).toEqual(false);
    });
  });
});
