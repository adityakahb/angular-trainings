import { ResponsiveImageInterface } from './../../interfaces/responsive-image';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss']
})
export class ResponsiveImageComponent implements OnInit {

  @Input() imgData: ResponsiveImageInterface = {};

  constructor() { }

  ngOnInit() {
  }

  generateSrcset(normal, retina) {
    let str = '';
    if (normal) {
      // normal = (/picsum/g).test(normal) ? normal + '?random=' + parseInt('' + (Math.random() * 100000), 10) : normal;
    }
    if (retina) {
      // retina = (/picsum/g).test(retina) ? retina + '?random=' + parseInt('' + (Math.random() * 100000), 10) : retina;
    }
    if (normal && retina) {
      str += normal + ' 1x, '
        + retina + ' 1.5x, '
        // + retina + ' 1.75x, '
        + retina + ' 2x, '
        + retina + ' 2.5x, '
        + retina + ' 3x';
    }
    if (normal && !retina) {
      str += normal + ' 1x';
    }
    if (!normal && retina) {
      str += retina + ' 1x';
    }
    return str;
  }
}
