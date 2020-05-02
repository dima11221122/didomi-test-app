import * as fromLoading from './ui.actions';

describe('ui', () => {
  it('should return an action', () => {
    expect(fromLoading.setLoading({payload: false}).type).toBe('[Ui] set loading');
  });
});
