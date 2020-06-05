import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../common-components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitefooterColumnComponent } from './../../components/sitefooter-column/sitefooter-column.component';
import { SitefooterComponent } from './../sitefooter/sitefooter.component';
import { SiteheaderComponent } from './../siteheader/siteheader.component';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CtaBtnModule
  ],
  exports: [
    SiteheaderComponent,
    SitefooterComponent,
    SitefooterColumnComponent
  ],
  declarations: [
    SiteheaderComponent,
    SitefooterComponent,
    SitefooterColumnComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultLayoutModule { }
