import { AlertMsgModule } from './../../shared/components/alert-msg/alert-msg.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../../shared/components/cta-btn/cta-btn.module';
import { DirectiveModule } from './../../shared/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitefooterColumnComponent } from './../../components/sitefooter-column/sitefooter-column.component';
import { SitefooterComponent } from './../sitefooter/sitefooter.component';
import { SiteheaderComponent } from './../siteheader/siteheader.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  imports: [
    AlertMsgModule,
    CommonModule,
    CtaBtnModule,
    DirectiveModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
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
