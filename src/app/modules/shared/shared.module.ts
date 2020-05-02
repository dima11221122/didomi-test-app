import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromShared from './store/reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromShared.sharedFeatureKey, fromShared.reducers, { metaReducers: fromShared.metaReducers })
  ]
})
export class SharedModule { }
