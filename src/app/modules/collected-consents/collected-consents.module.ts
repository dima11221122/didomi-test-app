import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectedConsentsComponent } from './components/collected-consents/collected-consents.component';
import { CollectedConsentsRoutingModule } from './routing/collected-consents-routing.module';



@NgModule({
  declarations: [CollectedConsentsComponent],
  imports: [
    CommonModule,
    CollectedConsentsRoutingModule
  ]
})
export class CollectedConsentsModule { }
