import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-item-teaser',
  templateUrl: './item-teaser.component.html',
  styleUrls: ['./item-teaser.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemTeaserComponent implements OnInit {
  @Input() cProps;
  @Input() theme;
  constructor() { }

  ngOnInit() {
    
  }
}
