import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createConsent, createConsentFail } from './consents-management.actions';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';
import { ConsentsService } from '../../../shared/services/consents/consents.service';
import { showSuccessMessage } from '../../../shared/store/ui/ui.actions';
import { of } from 'rxjs';

/**
 * Effects related to management of consents
 */
@Injectable()
export class ConsentsManagementEffects {
  constructor(
    private actions$: Actions,
    private consentsService: ConsentsService
  ) {
  }

  /**
   * Handling of creating consent process
   */
  createConsent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createConsent.type),
      switchMap(({ payload }) => {
        return this.consentsService.createConsent(payload).pipe(
          mapTo(showSuccessMessage({ payload: 'Consent is created!' })),
          catchError((e) => of(createConsentFail({ payload: e.message })))
        );
      })
    );
  });
}
