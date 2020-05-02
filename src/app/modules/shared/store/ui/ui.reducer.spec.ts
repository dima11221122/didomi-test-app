import { uiReducer, initialState } from './ui.reducer';
import { setLoading } from './ui.actions';
import objectContaining = jasmine.objectContaining;

describe('Ui Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = uiReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('setLoading action', () => {
    it('should change loading on true if loading param is true', () => {
      const newState = uiReducer(initialState, setLoading({ payload: true }));
      expect(newState).toEqual(objectContaining({ loading: true }))
    })
  })
});
