import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[Ui] set loading',
  props<{payload: boolean}>()
)




