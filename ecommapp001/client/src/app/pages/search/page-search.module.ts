import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../common-components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../directives/directive.module';
import { FiltersContainerComponent } from './../../components/filters-container/filters-container.component';
import { FilterSectionModule } from './../../common-components/filter-section/filter-section.module';
import { ItemCarouselModule } from './../../common-components/item-carousel/item-carousel.module';
import { ItemTeaserModule } from './../../common-components/item-teaser/item-teaser.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageSearchComponent } from './page-search.component';
import { PageSearchRoutingModule } from './page-search-routing.module';
import { PriceModule } from './../../common-components/price/price.module';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    FilterSectionModule,
    ItemCarouselModule,
    ItemTeaserModule,
    PageSearchRoutingModule,
    PriceModule,
  ],
  declarations: [
    FiltersContainerComponent,
    PageSearchComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageSearchModule { }
