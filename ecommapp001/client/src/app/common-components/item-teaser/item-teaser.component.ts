import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-item-teaser',
  templateUrl: './item-teaser.component.html',
  styleUrls: ['./item-teaser.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemTeaserComponent implements OnInit, AfterViewInit {
  @ViewChild('itemtitle_xs') itemtitle_xs: ElementRef;
  @ViewChild('itemtitle_md') itemtitle_md: ElementRef;
  @ViewChild('itemtitle_xl') itemtitle_xl: ElementRef;
  @ViewChild('itemtitle_xxl') itemtitle_xxl: ElementRef;

  @Input() cProps;
  @Input() theme;

  showxs = 'hidden';
  showmd = 'hidden';
  showxl = 'hidden';
  showxxl = 'hidden';

  checkdevice = '';

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.generateText('xs');
    });
    
    // if (this.itemtitle.nativeElement.offsetHeight > 72) {
    //   let innertext = this.itemtitle.nativeElement.innerHTML;
    //   while (this.itemtitle.nativeElement.offsetHeight > 72) {
    //     innertext = innertext.substr(0, innertext.length - 1);
    //     this.itemtitle.nativeElement.innerHTML = innertext;
    //   }
    //   innertext = innertext.substr(0, innertext.length - 5);
    //   this.itemtitle.nativeElement.innerHTML = innertext + '...';
    // }
    // setTimeout(() => {
      
    // }, 0);
  }
  generateText(str) {
    this.checkdevice = str;
    this['show' + str] = '';
    setTimeout(() => {
      const elem = (this['itemtitle_' + str] || {}).nativeElement;
      console.log('=========(elem || {}).offsetHeight', (elem || {}).offsetHeight);
      if ((elem || {}).offsetHeight > 72) {
        let innertext = elem.innerHTML;
        while(elem.offsetHeight > 72) {
          innertext = innertext.substr(0, innertext.length - 1);
          elem.innerHTML = innertext;
        }
        innertext = innertext.substr(0, innertext.length - 5);
        elem.innerHTML = innertext + '...';
      }
    }, 0);
  }
}
