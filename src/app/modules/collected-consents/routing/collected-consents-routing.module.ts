import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectedConsentsComponent } from '../components/collected-consents/collected-consents.component';
import { ConsentsResolverService } from './resolvers/consents-resolver/consents-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CollectedConsentsComponent,
    resolve: {
      consents: ConsentsResolverService
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CollectedConsentsRoutingModule { }
