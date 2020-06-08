import { Component, OnInit, ViewChild, NgZone, ElementRef, AfterViewInit } from '@angular/core';

declare const require: any;
declare const stickybits: any;
const searchResultsJson = require('./../../data/search-results.json') || [];
const featuredResultsJson = require('./../../data/featured-results.json') || [];
const filtersJson = require('./../../data/filters.json') || [];

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('searchsticky') searchsticky: ElementRef;
  searchResultsData;
  featuredResultsData;
  filtersData;
  isFiltersModalOpen = false;
  closeFiltersModal = () => {
    this.isFiltersModalOpen = false;
  }
  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.searchResultsData = searchResultsJson;
    this.featuredResultsData = featuredResultsJson;
    this.filtersData = filtersJson;
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      if (window && document) {
        if (stickybits && this.searchsticky.nativeElement) {
          stickybits('#' + this.searchsticky.nativeElement.getAttribute('id'), {useStickyClasses: true, stickyBitStickyOffset: 64});
        }
      }
    });
  }

  openFiltersModal() {
    this.isFiltersModalOpen = true;
  }
}
