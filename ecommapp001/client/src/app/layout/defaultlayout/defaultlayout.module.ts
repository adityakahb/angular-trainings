import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../shared/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitefooterColumnComponent } from './../../components/sitefooter-column/sitefooter-column.component';
import { SitefooterComponent } from './../sitefooter/sitefooter.component';
import { SiteheaderComponent } from './../siteheader/siteheader.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
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
