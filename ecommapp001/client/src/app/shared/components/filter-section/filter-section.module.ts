import { PriceModule } from './../price/price.module';
import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { FilterSectionComponent } from './filter-section.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingsModule } from './../ratings/ratings.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    RatingsModule,
    PriceModule,
  ],
  declarations: [
    FilterSectionComponent
  ],
  exports: [
    FilterSectionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterSectionModule { }
