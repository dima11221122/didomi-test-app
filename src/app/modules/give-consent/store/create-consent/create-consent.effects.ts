import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createConsent, createConsentFail } from './create-consent.actions';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';
import { ConsentsService } from '../../../shared/services/consents/consents.service';
import { showSuccessMessage } from '../../../shared/store/ui/ui.actions';
import { of } from 'rxjs';


@Injectable()
export class CreateConsentEffects {
  constructor(
    private actions$: Actions,
    private consentsService: ConsentsService
  ) {
  }

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
