import { AlertMsgComponent } from './alert-msg.component';
import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    CtaBtnModule
  ],
  declarations: [
    AlertMsgComponent
  ],
  exports: [
    AlertMsgComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertMsgModule { }
