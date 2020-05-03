import { createConsentReducer, initialState } from './create-consent.reducer';
import { createConsentFail } from './create-consent.actions';

describe('CreateConsent Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = createConsentReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  it('createConsentFail should save error in store', () => {
    const result = createConsentReducer(initialState, createConsentFail({ payload: 'Error' }));
    expect(result).toEqual({ error: 'Error' });
  });
});
