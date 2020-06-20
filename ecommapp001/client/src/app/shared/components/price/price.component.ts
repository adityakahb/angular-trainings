import { Component, OnInit, Input } from '@angular/core';

declare const require: any;
const currencyJSON = require('./../../../shared/data/currency.json') || [];

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() currency;
  @Input() price;
  symbol;
  major;
  minor;

  constructor() { }

  ngOnInit(): void {
    const symbolArr = currencyJSON.filter(item => item.name === this.currency);
    if ((symbolArr || [])[0]) {
      this.symbol = symbolArr[0].symbol;
    }
    const major = (this.price || {}).major || '00';
    const minor = (this.price || {}).minor || '00';
    this.major = major === '00' ? '0' : major;
    this.minor = minor === '00' ? '' : minor;
  }

}
