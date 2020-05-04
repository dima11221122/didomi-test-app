import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const defaultRoute = '/give-consent';

const routes: Routes = [
  {
    path: 'give-consent',
    loadChildren: () => import('../modules/give-consent/give-consent.module').then(m => m.GiveConsentModule)
  },
  {
    path: 'consents',
    loadChildren: () => import('../modules/collected-consents/collected-consents.module').then(m => m.CollectedConsentsModule)
  },
  { path: '', redirectTo: defaultRoute, pathMatch: 'full' },
  { path: '**', redirectTo: defaultRoute, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
