import { Component, OnInit } from '@angular/core';

declare const require: any;
const searchResultsJson = require('./../../data/search-results.json') || []; 


@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit {
  searchResultsData;
  constructor() { }

  ngOnInit() {
    this.searchResultsData = searchResultsJson;
  }
}
