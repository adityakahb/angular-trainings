import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../common-components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../directives/directive.module';
import { ItemTeaserModule } from './../../common-components/item-teaser/item-teaser.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageSearchComponent } from './page-search.component';
import { PageSearchRoutingModule } from './page-search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    PageSearchRoutingModule,
    ItemTeaserModule,
    CtaBtnModule
  ],
  declarations: [
    PageSearchComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageSearchModule { }
