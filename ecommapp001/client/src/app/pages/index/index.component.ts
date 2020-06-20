import { Component, OnInit } from '@angular/core';
declare const require: any;
let indexJson = require('./../../shared/data/index.json');


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  indexData;
  constructor() { }

  ngOnInit() {
    // this.generateData(epQaPhydrBJson);
    this.indexData = indexJson;
  }
}
