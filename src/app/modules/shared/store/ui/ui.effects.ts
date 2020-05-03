import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { showSuccessMessage } from './ui.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';



@Injectable()
export class UiEffects {
  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}

  showSuccessMessage$ = createEffect(() => this.actions$.pipe(
    ofType(showSuccessMessage.type),
    tap(({ payload }) => this.snackBar.open(payload))
  ), { dispatch: false })
}
