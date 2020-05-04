import { consentsManagementReducer, initialState } from './consents-management.reducer';
import { createConsentFail } from './consents-management.actions';

describe('ConsentsManagement Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = consentsManagementReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  it('createConsentFail should save error in store', () => {
    const result = consentsManagementReducer(initialState, createConsentFail({ payload: 'Error' }));
    expect(result).toEqual({ error: 'Error' });
  });
});
