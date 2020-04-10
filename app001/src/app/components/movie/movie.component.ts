import { Movietile } from './movie.interface';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  tilescount = 6;
  totallegth = 0;
  alltiles: Movietile[] = [];
  grayscale = false;
  firstname = 'firstname';
  lastname = 'lastname';
  loading = false;

  apiresponse;
  
  constructor(private apiservice: HttpService) {
    this.generateTiles();
  }

  ngOnInit(): void {
    
  }

  applyTransform() {
    this.alltiles = [];
    this.generateTiles();
  }

  generateTiles() {
    this.loading = true;
    this.totallegth += this.tilescount;
    const url = `http://api.icndb.com/jokes/random/${this.tilescount}/?exclude=[explicit]`;
    this.apiservice.getData(url).subscribe(
      (response) => {
        this.apiresponse = response;
        const data = (this.apiresponse || {}).value || [];
        console.log('======data', data);
        data.forEach((item, index) => {
          const tempObj: Movietile = {
            id: item.id,
            joke: item.joke,
            banner: 'https://picsum.photos/400/225?random=' + index + (this.grayscale ? '&grayscale' : ''),
            avatar: `https://api.adorable.io/avatars/172/${Math.random()}@adorable.io.png`,
            name: this.firstname + ' ' + this.lastname
          };
          this.alltiles.push(tempObj);
        });
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    );
  }

}
