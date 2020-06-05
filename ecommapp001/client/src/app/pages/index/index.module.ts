import { CommonModule } from '@angular/common';
import { DirectiveModule } from './../../directives/directive.module';
import { IndexComponent } from './index.component';
import { IndexbannerComponent } from './../../components/indexbanner/indexbanner.component';
import { IndexRoutingModule } from './index-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingsReviewsModule } from './../../common-components/ratings-reviews/ratings-reviews.module';
import { ResponsiveImageModule } from './../../common-components/responsive-image/responsive-image.module';
import { SectionHeaderModule } from './../../common-components/section-header/section-header.module';
import { StandardTeaserModule } from './../../common-components/standard-teaser/standard-teaser.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    IndexRoutingModule,
    RatingsReviewsModule,
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
