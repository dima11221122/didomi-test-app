import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromShared from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UiEffects } from './store/ui/ui.effects';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromShared.sharedFeatureKey, fromShared.reducers, { metaReducers: fromShared.metaReducers }),
    EffectsModule.forFeature([UiEffects]),
    MatSnackBarModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ]
})
export class SharedModule {
}
