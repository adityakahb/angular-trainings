import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appItemTextTrimmer]'
})
export class ItemTextTrimmerDirective implements AfterViewInit {
  @Input() titletext;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      if ((this.el || {}).nativeElement) {
        const el = this.el.nativeElement;
        // console.log('==========el.style.offsetHeight', el.style.offsetHeight);
      }
    }, 0);
  }
}
