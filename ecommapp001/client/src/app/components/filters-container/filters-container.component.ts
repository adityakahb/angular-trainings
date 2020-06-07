import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss']
})
export class FiltersContainerComponent implements OnInit {

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

  closeModal() {
    if (this.isOpen && this.closefn) {
      this.closefn();
    }
  }
}
