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
    HttpClientModule
  ]
})
export class GiveConsentModule { }
