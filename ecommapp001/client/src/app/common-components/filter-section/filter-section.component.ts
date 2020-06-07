import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {
  @Input() filter;
  isActive = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter() {
    this.isActive = !this.isActive;
  }
}
