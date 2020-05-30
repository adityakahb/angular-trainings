import { CommonFunctionsService } from './../../services/common-functions.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss']
})
export class ResponsiveImageComponent implements OnInit {

  @Input() imgData = {};

  constructor(private bpService: CommonFunctionsService) { }

  ngOnInit() {
  }
}
