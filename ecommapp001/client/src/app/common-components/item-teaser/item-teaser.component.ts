import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

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

  @Input() cProps;
  @Input() theme;

  checkdevice = 'mobile';

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
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
}
