import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { PriceComponent } from './price.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingsModule } from './../ratings/ratings.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    RatingsModule,
  ],
  declarations: [
    PriceComponent
  ],
  exports: [
    PriceComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PriceModule { }
