import { Component, OnInit, Input, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss']
})
export class FiltersContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('color_ul') color_ul: ElementRef;

  @Input() cProps;
  @Input() isOpen;
  @Input() closefn;

  @HostListener('document:keyup', ['$event']) onEscapeEvent($event) {
    if (window && document) {
      if (($event || {}).keyCode === 27 && this.isOpen) {
        this.closeModal();
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // let ul = this.color_ul.nativeElement;
    // function parseColor(color) {
    //   var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
    //   // return {
    //   //     hex: "#" + arr.slice(0, 3).map(toHex).join(""),
    //   //     opacity: arr.length == 4 ? arr[3] : 1
    //   // };
    //   return arr.slice(0, 3).map(toHex).join("");
    // }
    // function toHex(int) {
    //     var hex = int.toString(16);
    //     return hex.length == 1 ? "0" + hex : hex;
    // }
    // let rgbfn = (elem) => {
    //   if (elem) {
    //     let styleStr = elem.getAttribute('style');
    //     styleStr = styleStr.replace('background-color: ', '').replace(';', '');
    //     return parseColor(styleStr);
    //   }
    //   return '';
    // };
    // if (ul) {
    //   let liList = Array.prototype.slice.call(ul.querySelectorAll('li'));
    //   let colorArr = [];
    //   liList.forEach((li) => {
    //     let colorObj = {};
    //     let colorRGBSpan = li.querySelector('span.colour-label');
    //     let colorInput = li.querySelector('input[type=checkbox]');
    //     colorObj['colorhex'] = rgbfn(colorRGBSpan);
    //     colorObj['name'] = colorInput.value;
    //     colorArr.push(colorObj);
    //     // console.log('=================colorRGBSpan', colorRGBSpan);
    //   });
    //   console.log('=============colorArr', JSON.stringify(colorArr));
    // }
  }

  closeModal() {
    if (this.isOpen && this.closefn) {
      this.closefn();
    }
  }
}
