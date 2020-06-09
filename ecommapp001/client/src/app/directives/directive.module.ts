import { NgModule } from '@angular/core';
import { ResponsiveBreakpointDirective } from './ResponsiveBreakpoint/responsive-breakpoint.directive';
import { ItemTextTrimmerDirective } from './ItemTextTrimmer/item-text-trimmer.directive';

@NgModule({
  declarations: [
    ResponsiveBreakpointDirective,
    ItemTextTrimmerDirective
  ],
  exports: [
    ResponsiveBreakpointDirective,
    ItemTextTrimmerDirective
  ],
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class DirectiveModule { }
