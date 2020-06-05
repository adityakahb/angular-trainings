import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sitefooter-column',
  templateUrl: './sitefooter-column.component.html',
  styleUrls: ['./sitefooter-column.component.scss']
})
export class SitefooterColumnComponent implements OnInit {
  @Input() cProps;
  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isActive = !this.isActive;
  }
}
