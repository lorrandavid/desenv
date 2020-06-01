import { SharedModule } from './../shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';

@NgModule({
  declarations: [
    EnderecosListComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule { }