import { Component, OnInit, Input, NgZone, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss']
})
export class ItemCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('itemslider') itemslider: ElementRef;
  @Input() ngProps;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      if (window && document) {
        $(this.itemslider.nativeElement).slick({
          arrows: false,
          autoplay: false,
          dots: true,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 6,
          speed: 300,
          responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
        });
      }
    });
  }
}
