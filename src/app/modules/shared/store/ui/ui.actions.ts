import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[Ui] set loading',
  props<{ payload: boolean }>()
);

export const showSuccessMessage = createAction(
  '[Ui] show success message',
  props<{ payload: string }>()
);
