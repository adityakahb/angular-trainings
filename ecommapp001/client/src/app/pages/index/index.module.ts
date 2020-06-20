import { CommonModule } from '@angular/common';
import { DirectiveModule } from './../../shared/directives/directive.module';
import { IndexComponent } from './index.component';
import { IndexbannerComponent } from './../../components/indexbanner/indexbanner.component';
import { IndexRoutingModule } from './index-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingsModule } from './../../shared/components/ratings/ratings.module';
import { ResponsiveImageModule } from './../../shared/components/responsive-image/responsive-image.module';
import { SectionHeaderModule } from './../../shared/components/section-header/section-header.module';
import { StandardTeaserModule } from './../../shared/components/standard-teaser/standard-teaser.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    IndexRoutingModule,
    RatingsModule,
    ResponsiveImageModule,
    SectionHeaderModule,
    StandardTeaserModule
  ],
  declarations: [
    IndexComponent,
    IndexbannerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
