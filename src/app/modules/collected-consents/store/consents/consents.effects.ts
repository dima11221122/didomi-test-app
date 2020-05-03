import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConsentsService } from '../../../shared/services/consents/consents.service';
import { loadConsents, loadConsentsFail, loadConsentsSuccess } from './consents.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ConsentsEffects {
  constructor(
    private actions$: Actions,
    private consentsService: ConsentsService
  ) {
  }

  loadConsents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadConsents.type),
      switchMap(() => {
        return this.consentsService.getConsents().pipe(
          map(consents => loadConsentsSuccess({ payload: consents })),
          catchError(error => of(loadConsentsFail({ payload: error.message })))
        );
      })
    );
  });
}
