import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading } from '../../store/ui/ui.selectors';
import { setLoading, showSuccessMessage } from '../../store/ui/ui.actions';

/**
 * Service for ui state management
 */
@Injectable({
  providedIn: 'root'
})
export class UiService {
  readonly selectLoading$ = this.store.select(selectLoading);

  constructor(
    private store: Store
  ) {
  }

  /**
   * Show or hide the loading bar at the top of the page
   * @param value - visibility of loading bar
   */
  setLoading(value: boolean) {
    this.store.dispatch(setLoading({ payload: value }));
  }

  /**
   * Show message in snack bar
   * @param message - message which'll be shown in snack bar
   */
  showSuccessMessage(message: string) {
    this.store.dispatch(showSuccessMessage({ payload: message }));
  }
}
