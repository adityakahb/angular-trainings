import { Component, OnInit, ViewChild, NgZone, ElementRef, AfterViewInit, ViewEncapsulation, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SearchService } from 'src/app/shared/services/search.service';

declare const require: any;
declare const stickybits: any;

const detailJson = require('./../../shared/data/itemdetail.json') || {};

@Component({
  selector: 'app-page-itemdetail',
  templateUrl: './page-itemdetail.component.html',
  styleUrls: ['./page-itemdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageItemdetailComponent implements OnInit, AfterViewInit {
  @ViewChild('searchsticky') searchsticky: ElementRef;
  modalRef: BsModalRef;

  idetail = {};

  constructor(private searchService: SearchService, private modalService: BsModalService, private ngZone: NgZone) { }

  ngOnInit() {
    this.searchService.getSearchResults('').subscribe((res) => {
      this.idetail = detailJson;
      if (res.status === 200) {
      }
    });
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      if (window && document) {
        // if (stickybits && this.searchsticky.nativeElement) {
        //   stickybits('#' + this.searchsticky.nativeElement.getAttribute('id'), {useStickyClasses: true, stickyBitStickyOffset: 64});
        // }
        // const parent = document.getElementById('prodDetails');
        // const tables = parent.querySelectorAll('table');

        // const specsArr = Array.prototype.slice.call(tables || []).map(table => {
        //   const trs = table.querySelectorAll('tr');
        //   return {
        //     table: Array.prototype.slice.call(trs || []).map(tr => {
        //       // console.log('===============tr', tr.getElementsByClassName('label')[0]);
        //       return {
        //         label: tr.getElementsByClassName('label').length > 0 ? tr.getElementsByClassName('label')[0].innerHTML : '',
        //         value: tr.getElementsByClassName('value').length > 0 ? tr.getElementsByClassName('value')[0].innerHTML : ''
        //       }
        //     })
        //   };
        // });

        // console.log('=============specsArr', JSON.stringify(specsArr));
      }
    });
  }

  openDetailGallery(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
