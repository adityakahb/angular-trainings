import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  @Input() srcImgOn: string;
  @Input() srcImgOff: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeImg(this.srcImgOn);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeImg(this.srcImgOff);
  }

  private changeImg(img: string) {
    this.el.nativeElement.src = img;
  }
}
