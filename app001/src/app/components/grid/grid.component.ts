import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  
  gridResponse;
  apiResponse;

  sortbyVal = 'asc';

  constructor(private apiservice: HttpService) { }

  ngOnInit(): void {
    this.generateGrid();
  }

  generateGrid() {
    const url = 'https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1';
    this.apiservice.getData(url).subscribe(
      (response) => {
        this.apiResponse = response;
        this.gridResponse = (this.apiResponse || {}).list || [];
      }
    );
  }

  changeSortVal() {
    this.sortbyVal = this.sortbyVal === 'asc' ? 'dsc' : 'asc';
  }
}
