import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;
declare const require: any;

const bannerJson = require('./../../data/indexbanner.json');

@Component({
  selector: 'app-indexbanner',
  templateUrl: './indexbanner.component.html',
  styleUrls: ['./indexbanner.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class IndexbannerComponent implements OnInit {
  bannerData = {};
  cbp = 'xs';
  constructor() { }

  ngOnInit() {
    this.bannerData = bannerJson || [];
    if (window && document) {
      window.setTimeout(() => {
        $('.hero-slider').slick({
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
      }, 1000);
    }
  }

  updateImgSrc(value) {
    this.cbp = value;
  }
}
