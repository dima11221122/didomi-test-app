import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { UiEffects } from './ui.effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { showSuccessMessage } from './ui.actions';
import { hot } from 'jasmine-marbles';

describe('UiEffects', () => {
  let actions$: Observable<any>;
  let effects: UiEffects;
  let snackBarMock: {
    open: jasmine.Spy
  };

  beforeEach(() => {
    snackBarMock = jasmine.createSpyObj(['open']);
    TestBed.configureTestingModule({
      providers: [
        UiEffects,
        provideMockActions(() => actions$),
        { provide: MatSnackBar, useValue: snackBarMock }
      ]
    });

    effects = TestBed.inject(UiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('showSuccessMessage$', () => {
    it('should show message in snackbar', () => {
      actions$ = of(showSuccessMessage({ payload: 'Success message' }));
      effects.showSuccessMessage$.subscribe();
      expect(snackBarMock.open).toHaveBeenCalledWith('Success message');
    });
  });
});
