import { CommonFunctionsService } from './../../services/common-functions.service';
import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

const bpArr = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
let dpr: any;
let newBP = '';

@Directive({
  selector: '[appResponsiveBreakpoint]'
})
export class ResponsiveBreakpointDirective implements AfterViewInit {
  @Input() type;
  @Input() imgdata;
  currentBreakpoint = '';

  constructor(private el: ElementRef,
              private breakpointObserver: BreakpointObserver,
              private window: Window,
              private bpService: CommonFunctionsService) {
    if (this.window && window.devicePixelRatio) {
      dpr = this.window.devicePixelRatio;
    } else {
      dpr = '';
    }
  }
  ngAfterViewInit(): void {
    this.breakpointObserver.observe([
      '(min-width: 576px)',
      '(min-width: 768px)',
      '(min-width: 1024px)',
      '(min-width: 1200px)',
      '(min-width: 1680px)'])
      .subscribe((state: BreakpointState) => {
        this.currentBreakpoint = 'xs';
        if (state.breakpoints['(min-width: 576px)']) {
          this.currentBreakpoint = 'sm';
        }
        if (state.breakpoints['(min-width: 768px)']) {
          this.currentBreakpoint = 'md';
        }
        if (state.breakpoints['(min-width: 1024px)']) {
          this.currentBreakpoint = 'lg';
        }
        if (state.breakpoints['(min-width: 1200px)']) {
          this.currentBreakpoint = 'xl';
        }
        if (state.breakpoints['(min-width: 1680px)']) {
          this.currentBreakpoint = 'xxl';
        }
        if (this.currentBreakpoint !== newBP) {
          newBP = this.currentBreakpoint;
        }
        setTimeout(() => {
          if (this.el.nativeElement && this.type === 'image' && this.imgdata) {
            this.setImgUrl(this.currentBreakpoint, (dpr > 1 ? '2' : ''), this.imgdata);
          }
          this.bpService.setCBP(this.currentBreakpoint + (dpr > 1 ? '2' : ''));
        }, 0);
      });
  }
  setImgUrl(bp, dp, imgdata) {
    if (imgdata[bp + dp]) {
      this.el.nativeElement.src = (/picsum/g).test(imgdata[bp + dp]) ?
        imgdata[bp + dp] + '?random=' + parseInt('' + (Math.random() * 100000), 10) :
        imgdata[bp + dp];
    } else {
      let imgFound = '';
      let index = bpArr.indexOf(bp);
      if (dp === '2') {
        while(index >= 0) {
          imgFound = imgdata[bpArr[index] + dp];
          if (imgFound) {
            imgFound = (/picsum/g).test(imgFound) ?
            imgFound + '?random=' + parseInt('' + (Math.random() * 100000), 10) :
            imgFound;
            break;
          }
          index--;
        }
      }
      if (imgFound === '') {
        index = bpArr.indexOf(bp);
        while(index >= 0) {
          imgFound = imgdata[bpArr[index]];
          if (imgFound) {
            imgFound = (/picsum/g).test(imgFound) ?
            imgFound + '?random=' + parseInt('' + (Math.random() * 100000), 10) :
            imgFound;
            break;
          }
          index--;
        }
      }
      if (imgFound !== '') {
        this.el.nativeElement.src = imgFound;
      }
    }
  }
}
