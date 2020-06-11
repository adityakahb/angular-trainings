import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  @Input() value;
  @Input() shouldShowBlank;
  ratingsArr = [];
  onestar = 'star-outline';

  constructor() { }

  ngOnInit() {
    let arr = [];
    try {
      let r = Math.round(this.value * 10) / 10;
      let r1 = r;
      r = parseFloat(r.toFixed(1));
      for (; r > 0.8; r--) {
        arr.push('star');
      }
      if (r >= 0.9) {
        arr.push('star');
      } else if (0.1 <= r && r < 0.8) {
        arr.push('star-half');
      }
      for (let s = arr.length + 1; s<=5; s++) {
        arr.push('star-outline');
      }

      if (r1 > 0) {
        this.onestar = 'star';
      }

    } catch (e) {}
    this.ratingsArr = arr;
  }
}
