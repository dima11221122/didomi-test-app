import { TestBed } from '@angular/core/testing';

import { UiService } from './ui.service';
import { sharedFeatureKey, SharedState } from '../store/reducers';
import { UiState } from '../store/ui/ui.reducer';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { take } from 'rxjs/operators';
import { setLoading } from '../store/ui/ui.actions';

describe('UiService', () => {
  let service: UiService;
  let initialState: { [ sharedFeatureKey ]: SharedState };
  let store: MockStore;
  const getState = loading => ({ [sharedFeatureKey]:  { ui: { loading } } })

  beforeEach(() => {
    initialState = getState(false);
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState })
      ]
    });
    service = TestBed.inject(UiService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#setLoading', () => {
    it('should set loading value correctly', () => {
      const dispatchSpy = spyOn(store, 'dispatch');
      service.setLoading(true);
      expect(dispatchSpy).toHaveBeenCalledWith(setLoading({ payload: true }));
    });
  });

  it('selectLoading$', () => {
    store.setState(getState(true));
    const expected = hot('a', { a: true });
    expect(service.selectLoading$).toBeObservable(expected);
  })
});
