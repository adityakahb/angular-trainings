import { ChangeDetectorRef, Component, OnInit, ViewChild, NgZone, ElementRef, ViewEncapsulation, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SearchService } from 'src/app/shared/services/search.service';
import { combineLatest, Subscription } from 'rxjs';

declare const require: any;
declare const $: any;

const detailJson = require('./../../shared/data/itemdetail.json') || {};

@Component({
  selector: 'app-page-itemdetail',
  templateUrl: './page-itemdetail.component.html',
  styleUrls: ['./page-itemdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageItemdetailComponent implements OnInit {
  @ViewChild('detailgallery') detailgallery: ElementRef;
  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  detailslider;

  imgArr = [
    'https://via.placeholder.com/2400x2400',
    'https://via.placeholder.com/2400x2400',
    'https://via.placeholder.com/2400x2400',
    'https://via.placeholder.com/2400x2400',
    'https://via.placeholder.com/2400x2400',
    'https://via.placeholder.com/2400x2400',
    'https://via.placeholder.com/2400x2400'
  ]

  idetail;

  constructor(private searchService: SearchService,
              private modalService: BsModalService,
              private ngZone: NgZone,
              private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    this.searchService.getSearchResults('').subscribe((res) => {
      this.idetail = detailJson;
      if (res.status === 200) {
      }
    });
  }

  initSlider() {
    this.ngZone.runOutsideAngular(() => {
      if (window && document) {
        const slider = document.getElementById('detailslider');
        if (slider) {
          $(slider).on('init', () => {
            const slides = slider.querySelectorAll('.d-img');
            const slide1 = slides[0];
            let className = '';
            if ($(slide1).outerHeight() >= $(slide1).outerWidth()) {
              className = 'tall';
            }
            if ($(slide1).outerHeight() < $(slide1).outerWidth()) {
              className = 'wide';
            }
            slides.forEach(slide => {
              if ($(slide).find('img').length > 0) {
                $(slide).find('img').removeClass('d-none wide tall').addClass(className);
                $(slide).find('span').addClass('d-none');
                $(slide).trigger('zoom.destroy').zoom({ on: 'click' });
              }
            });
            this.detailslider = slider;
          });
          setTimeout(() => {
            $(slider).slick({
              arrows: true,
              autoplay: false,
              dots: false,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 300,
              prevArrow: `<button
              class="btn btn-light btn-lg slick-prev"
              type="button" title="Previous">
              <ion-icon name="chevron-back"></ion-icon>
            </button>`,
              nextArrow: `<button
              class="btn btn-light btn-lg slick-next"
              type="button" title="Next">
              <ion-icon name="chevron-forward"></ion-icon>
            </button>`
            });
          }, 0);
        }
      }
    });
  }

  destroySlider() {
    this.ngZone.runOutsideAngular(() => {
      if (window && document && this.detailslider) {
        try {
          $(this.detailslider).slick('unslick');
        }
        catch(e) {}
      }
    });
  }

  openDetailGallery($event: Event, template: TemplateRef<any>) {
    $event.preventDefault();
    const _combine = combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck());
    this.subscriptions.push(
      this.modalService.onShown.subscribe((reason: string) => {
        console.log(`onShown event has been fired`);
        this.initSlider();
      })
    );
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string) => {
        console.log(`onHidden event has been fired`);
        this.unsubscribe();
        this.destroySlider();
      })
    );
    this.subscriptions.push(_combine);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'idetail-modal' })
    );
  }

  unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
}
