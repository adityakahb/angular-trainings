import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../shared/directives/directive.module';
import { ItemCarouselModule } from './../../shared/components/item-carousel/item-carousel.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageItemdetailComponent } from './page-itemdetail.component';
import { PageItemdetailRoutingModule } from './page-itemdetail-routing.module';
import { PriceModule } from './../../shared/components/price/price.module';
import { RatingsModule } from './../../shared/components/ratings/ratings.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    ItemCarouselModule,
    PageItemdetailRoutingModule,
    PriceModule,
    RatingsModule,
  ],
  declarations: [
    PageItemdetailComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageItemdetailModule { }
