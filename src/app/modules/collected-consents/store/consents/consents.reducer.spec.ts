import { consentsReducer, ConsentsState, initialState } from './consents.reducer';
import { loadConsentsSuccess, nextPage, previousPage, setPage } from './consents.actions';
import { Consent } from '../../../shared/models/consent';

describe('Consents Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = consentsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('loadConsentsSuccess', () => {
    it('should update state correctly', () => {
      const data: Consent[] = [
        { id: 1, targetedAds: true, email: 'john_doe@gmail.com' }
      ];
      const res = consentsReducer(initialState, loadConsentsSuccess({ payload: data }));
      expect(res.entities).toEqual({ 1: data[0] });
    });
  });

  describe('current page actions', () => {
    let data: Consent[];

    beforeEach(() => {
      data = [
        { id: 1, targetedAds: true, email: 'john_doe@gmail.com' },
        { id: 3, receiveNewsletter: true, email: 'email1@gmail.com' },
        { id: 4, trackVisits: true, receiveNewsletter: true, email: 'email2@gmail.com' },
      ];
    });

    describe('nextPage', () => {

      it('should switch on next page correctly if there are pages ahead', () => {
        const prevState = consentsReducer(initialState, loadConsentsSuccess({ payload: data }));
        const afterNextPageState = consentsReducer(prevState, nextPage());
        expect(afterNextPageState.currentPage).toEqual(1);
      });

      it('should not switch on next page if pages ended', () => {
        const prevState = consentsReducer({ ...initialState, currentPage: 1 }, loadConsentsSuccess({ payload: data }));
        const afterNextPageState = consentsReducer(prevState, nextPage());
        expect(afterNextPageState.currentPage).toEqual(1);
      });
    });

    describe('previousPage', () => {
      it('should switch on previous page correctly if there are pages before', () => {
        const prevState = consentsReducer({ ...initialState, currentPage: 1 }, loadConsentsSuccess({ payload: data }));
        const afterPrevPageState = consentsReducer(prevState, previousPage());
        expect(afterPrevPageState.currentPage).toEqual(0);
      });

      it('should not switch on previous page correctly if current page equal 0', () => {
        const prevState = consentsReducer(initialState, loadConsentsSuccess({ payload: data }));
        const afterPrevPageState = consentsReducer(prevState, previousPage());
        expect(afterPrevPageState.currentPage).toEqual(0);
      });
    });

    describe('setPage', () => {
      let prevState: ConsentsState;
      beforeEach(() => {
        prevState = consentsReducer(initialState, loadConsentsSuccess({ payload: data }));
      });

      it('should switch on page correctly if page number is inside of pages numbers range', () => {
        const afterSetPageState = consentsReducer(prevState, setPage({ payload: 1 }));
        expect(afterSetPageState.currentPage).toEqual(1);
      });

      it('should not switch on page if page number is less than zero', () => {
        const afterSetPageState = consentsReducer(prevState, setPage({ payload: -1 }));
        expect(afterSetPageState.currentPage).toEqual(0);
      });

      it('should not switch on page if page number if greater than total pages count', () => {
        const afterSetPageState = consentsReducer(prevState, setPage({ payload: 2 }));
        expect(afterSetPageState.currentPage).toEqual(0);
      });
    });
  });


});
