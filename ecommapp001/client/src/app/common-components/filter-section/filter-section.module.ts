import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { FilterSectionComponent } from './filter-section.component';
import { NgModule } from '@angular/core';
import { RatingsModule } from './../ratings/ratings.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    RatingsModule,
  ],
  declarations: [
    FilterSectionComponent
  ],
  exports: [
    FilterSectionComponent
  ]
})
export class FilterSectionModule { }
