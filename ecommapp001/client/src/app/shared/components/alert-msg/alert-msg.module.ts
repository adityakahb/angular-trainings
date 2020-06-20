import { AlertMsgComponent } from './alert-msg.component';
import { CommonModule } from '@angular/common';
import { CtaBtnModule } from './../cta-btn/cta-btn.module';
import { NgModule } from '@angular/core';

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
  ]
})
export class AlertMsgModule { }
