import { Component, OnInit } from '@angular/core';
import { Itile } from 'app/interfaces';

@Component({
  selector: 'app-home',
  template: `
  <p>This website shows some sample interactive SVG widgets using Angular.io</p>
  <p>Click on the links below to explore the samples</p>
  <div class="tilegrid"> 
    <div *ngFor="let t of tiles" class="tile">
      <a [href]="t.url">
        <figure>
          <img [src]="t.img">
          <div class="caption">
            <div class="blur"></div>
            <div class="caption-text">
              <h3>{{ t.title }}</h3>
              <figcaption>{{ t.desc }}</figcaption>
            </div>
          </div>
        </figure>
      </a>
    </div>
  </div>
  `,
  styles: [`
    .tilegrid {
      display: flex;
      flex-wrap: wrap;
    }
    .tile {
      margin: 0;
      overflow: hidden;
      position: relative;
    }
    .tilegrid figure {
      margin: 0px;
    }
    .tilegrid img {
      z-index: 4;
    }
    .tilegrid a {
      text-decoration: none;
    }
    .caption {
      cursor: pointer;
      position: absolute;
      opacity: 0;
      top: 300px;
      transition: all 0.15s ease-in-out;
    }
    .blur {
      background-color: rgba(142, 68, 173,0.95);
      height: 300px;
      width:300px;
      z-index:5;
      position:absolute;
    }
    .caption-text {
      z-index: 10;
      color: #fff;
      position: absolute;
      width: 300px;
      height: 300px;
      text-align: center;
      top: 20px;
    }
    .caption-text h3 {
      padding: 0;
      margin: 0;
      text-transform: uppercase;
    }
  `]
})
export class HomeComponent implements OnInit {
  tiles: Itile[] = [];

  constructor() { }

  ngOnInit() {
    this.tiles = [
      {id: 'tile1', title: 'Tile 1', desc: 'Short Description of Tile 1', img: 'https://unsplash.it/300?image=0', order: 0, url: '/component1'},
      {id: 'tile2', title: 'Tile 2', desc: 'Short Description of Tile 2', img: 'https://unsplash.it/300?image=10', order: 1, url: '/component2'},
      {id: 'tile3', title: 'Tile 3', desc: 'Short Description of Tile 3', img: 'https://unsplash.it/300?image=20', order: 2, url: '/component3'},
      {id: 'tile4', title: 'Tile 4', desc: 'Short Description of Tile 4', img: 'https://unsplash.it/300?image=30', order: 3, url: '/component4'},
      {id: 'tile5', title: 'Tile 5', desc: 'Short Description of Tile 5', img: 'https://unsplash.it/300?image=40', order: 4, url: '/component5'},
      {id: 'tile6', title: 'Tile 6', desc: 'Short Description of Tile 6', img: 'https://unsplash.it/300?image=50', order: 5, url: '/component6'},
      {id: 'tile7', title: 'Tile 7', desc: 'Short Description of Tile 7', img: 'https://unsplash.it/300?image=60', order: 6, url: '/component7'},
      {id: 'tile8', title: 'Tile 8', desc: 'Short Description of Tile 8', img: 'https://unsplash.it/300?image=70', order: 7, url: '/component8'}
    ]
  }

}
