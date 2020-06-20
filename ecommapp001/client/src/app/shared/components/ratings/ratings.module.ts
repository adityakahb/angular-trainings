import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingsComponent } from './ratings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RatingsComponent
  ],
  exports: [
    RatingsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingsModule { }
