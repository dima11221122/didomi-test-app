import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectedConsentsComponent } from './components/collected-consents/collected-consents.component';
import { CollectedConsentsRoutingModule } from './routing/collected-consents-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCollectedConsents from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ConsentsEffects } from './store/consents/consents.effects';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { StringifyConsentPipe } from './pipes/stringify-consent/stringify-consent.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [CollectedConsentsComponent, StringifyConsentPipe],
  imports: [
    CommonModule,
    CollectedConsentsRoutingModule,
    StoreModule.forFeature(fromCollectedConsents.collectedConsentsFeatureKey, fromCollectedConsents.reducers, { metaReducers: fromCollectedConsents.metaReducers }),
    EffectsModule.forFeature([ConsentsEffects]),
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class CollectedConsentsModule { }
