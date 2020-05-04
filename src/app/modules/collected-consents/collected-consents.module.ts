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
import { PaginationControllerComponent } from './components/collected-consents/pagination-controller/pagination-controller.component';
import { PaginationComponent } from './components/collected-consents/pagination-controller/pagination/pagination.component';
import { FlexModule } from '@angular/flex-layout';
import { PaginationPagesPanelComponent } from './components/collected-consents/pagination-controller/pagination/pagination-pages-panel/pagination-pages-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


/**
 * Module for displaying list of created consents
 */
@NgModule({
  declarations: [
    CollectedConsentsComponent,
    StringifyConsentPipe,
    PaginationControllerComponent,
    PaginationComponent,
    PaginationPagesPanelComponent
  ],
  imports: [
    CommonModule,
    CollectedConsentsRoutingModule,
    StoreModule.forFeature(
      fromCollectedConsents.collectedConsentsFeatureKey,
      fromCollectedConsents.reducers,
      { metaReducers: fromCollectedConsents.metaReducers }
    ),
    EffectsModule.forFeature([ConsentsEffects]),
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    FlexModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CollectedConsentsModule { }
