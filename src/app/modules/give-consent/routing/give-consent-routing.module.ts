import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GiveConsentComponent } from '../components/give-consent/give-consent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GiveConsentComponent
  }
]

/**
 * Routing module for {@link GiveConsentModule}
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GiveConsentRoutingModule { }
