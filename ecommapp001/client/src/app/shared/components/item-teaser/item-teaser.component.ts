import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item-teaser',
  templateUrl: './item-teaser.component.html',
  styleUrls: ['./item-teaser.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemTeaserComponent implements OnInit, AfterViewInit {
  @Input() cProps;
  @Input() theme;

  xsval = '';
  xlval = '';
  xxlval = '';

  constructor() { }

  ngOnInit() {}
  ngAfterViewInit() {
    let xstext = (this.cProps || {}).title || '';
    let xltext = (this.cProps || {}).title || ''
    let xxltext = (this.cProps || {}).title || '';
    if (xstext.length > 64) {
      xstext = xstext.substr(0, 64).replace(/^\s+|\s+$/g, '') + '...';
    }
    if (xltext.length > 64) {
      xltext = xltext.substr(0, 64).replace(/^\s+|\s+$/g, '') + '...';
    }
    if (xxltext.length > 108) {
      xxltext = xxltext.substr(0, 108).replace(/^\s+|\s+$/g, '') + '...';
    }
    setTimeout(() => {
      this.xsval = xstext;
      this.xlval = xltext;
      this.xxlval = xxltext;
    }, 0);
  }
}
