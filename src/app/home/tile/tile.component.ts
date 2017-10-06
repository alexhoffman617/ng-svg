import { Component, OnInit, Input } from '@angular/core';
import { Itile } from 'app/interfaces';

@Component({
  selector: 'app-tile',
  template: `
  <div class="tile">
    <a [href]="tile.url">
        <img [src]="tile.img">
        <div class="tile-overlay">
          <div class="caption-text">
            <h3>{{ tile.title }}</h3>
            <p>{{ tile.desc }}</p>
          </div>
        </div>
    </a>
  </div>
  `,
  styles: [`

  a {
    text-decoration: none;
    height: 100%;
    width: 100%;
  }
  .tile-overlay {
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #008CBA;
  }
  .tile {
    overflow: hidden;
    position: relative;
  }
  .tile:hover .tile-overlay {
    opacity: 0.8;
  }
  .caption-text {
    color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .caption-text h3 {
    padding: 0;
    margin-top: 20px;
    text-transform: uppercase;
  }
  `]
})
export class TileComponent implements OnInit {
  @Input() tile: Itile

  constructor() { }

  ngOnInit() {
  }

}
