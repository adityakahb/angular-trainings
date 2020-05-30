import { CommonModule } from '@angular/common';
import { DirectiveModule } from './../../directives/directive.module';
import { PageSearchComponent } from './page-search.component';
import { PageSearchRoutingModule } from './page-search-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    PageSearchRoutingModule,
  ],
  declarations: [
    PageSearchComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageSearchModule { }
