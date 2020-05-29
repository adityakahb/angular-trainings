import { CtaBtnModule } from './../../common-components/cta-btn/cta-btn.module';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from './../../directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  ],
  declarations: [
    SiteheaderComponent,
    SitefooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DefaultLayoutModule { }
