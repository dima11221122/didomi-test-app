import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadConsents} from '../../store/consents/consents.actions';
import { selectConsents} from '../../store/consents/consents.selectors';

/**
 * Proxy service for working with {@link ConsentsState} store
 */
@Injectable({
  providedIn: 'root'
})
export class CollectedConsentsService {
  readonly consents$ = this.store.select(selectConsents);

  constructor(
    private store: Store
  ) { }

  /**
   * Initiate process of loading of consents
   */
  loadConsents() {
    this.store.dispatch(loadConsents());
  }
}
