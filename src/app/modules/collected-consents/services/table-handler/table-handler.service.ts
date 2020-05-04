import { Injectable } from '@angular/core';
import { hasNextPage, selectTotalPages, hasPrevPage, selectCurrentPage } from '../../store/consents/consents.selectors';
import { Store } from '@ngrx/store';
import { previousPage, nextPage, setPage } from '../../store/consents/consents.actions';

@Injectable({
  providedIn: 'root'
})
export class TableHandlerService {
  readonly totalPages$ = this.store.select(selectTotalPages);
  readonly currentPage$ = this.store.select(selectCurrentPage);
  readonly hasNextPage$ = this.store.select(hasNextPage);
  readonly hasPrevPage = this.store.select(hasPrevPage);

  constructor(
    private store: Store
  ) { }

  nextPage() {
    this.store.dispatch(nextPage());
  }

  prevPage() {
    this.store.dispatch(previousPage());
  }

  setPage(pageNumber: number) {
    this.store.dispatch(setPage({ payload: pageNumber }));
  }
}
