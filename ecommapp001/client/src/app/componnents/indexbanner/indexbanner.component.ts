import { Component, OnInit, ViewEncapsulation, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare const $: any;
declare const require: any;

const bannerJson = require('./../../data/indexbanner.json');

@Component({
  selector: 'app-indexbanner',
  templateUrl: './indexbanner.component.html',
  styleUrls: ['./indexbanner.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class IndexbannerComponent implements OnInit, AfterViewInit {
  @ViewChild('heroslider') heroslider: ElementRef;

  bannerData = {};
  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.bannerData = bannerJson || [];
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      if (window && document) {
        $(this.heroslider.nativeElement).slick({
          arrows: false,
          autoplay: false,
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 300,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    });
  }
}
