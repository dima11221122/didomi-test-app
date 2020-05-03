import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveConsentComponent } from './components/give-consent/give-consent.component';
import { GiveConsentRoutingModule } from './routing/give-consent-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { GiveConsentFormComponent } from './components/give-consent/give-consent-form/give-consent-form.component';
import { StoreModule } from '@ngrx/store';
import * as fromGiveConsent from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CreateConsentEffects } from './store/create-consent/create-consent.effects';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [GiveConsentComponent, GiveConsentFormComponent],
  imports: [
    CommonModule,
    GiveConsentRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FlexModule,
    MatCheckboxModule,
    HttpClientModule,
    StoreModule.forFeature(fromGiveConsent.giveConsentFeatureKey, fromGiveConsent.reducers, { metaReducers: fromGiveConsent.metaReducers }),
    EffectsModule.forFeature([CreateConsentEffects]),
    SharedModule
  ]
})
export class GiveConsentModule { }
