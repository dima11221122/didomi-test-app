import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading } from '../store/ui/ui.selectors';
import { setLoading } from '../store/ui/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  readonly selectLoading$ = this.store.select(selectLoading);
  constructor(
    private store: Store
  ) { }

  setLoading(value: boolean) {
    this.store.dispatch(setLoading({payload: value}));
  }
}
