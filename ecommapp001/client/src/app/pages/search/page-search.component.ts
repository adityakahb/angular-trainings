import { Component, OnInit } from '@angular/core';
declare const require: any;
let indexJson = require('./../../data/index.json');


@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.scss']
})
export class PageSearchComponent implements OnInit {
  indexData;
  constructor() { }

  ngOnInit() {
    // this.generateData(epQaPhydrBJson);
    this.indexData = indexJson;
  }
}
