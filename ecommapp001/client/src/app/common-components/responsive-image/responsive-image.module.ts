import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResponsiveImageComponent } from './responsive-image.component';
import { DirectiveModule } from '../../directives/directive.module';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule
  ],
  declarations: [
    ResponsiveImageComponent
  ],
  exports: [
    ResponsiveImageComponent
  ]
})
export class ResponsiveImageModule { }
