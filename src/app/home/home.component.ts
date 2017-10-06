import { Component, OnInit } from '@angular/core';
import { Itile } from 'app/interfaces';

@Component({
  selector: 'app-home',
  template: `
  <p>This website shows some sample interactive SVG widgets using Angular.io</p>
  <p>Click on the links below to explore the samples</p>
  <div class="tilegrid"> 
    <app-tile *ngFor="let t of tiles" [tile]="t"></app-tile>
  </div>
  `,
  styles: [`
    .tilegrid {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class HomeComponent implements OnInit {
  tiles: Itile[] = [
    {id: 'radar', title: 'Radar Chart', desc: 'Radar chart showing the relative value of different stats', img: 'http://via.placeholder.com/300', order: 0, url: '/stats'},
    {id: 'beam', title: 'Beam Forces', desc: 'Bending moment and shear forces on a beam', img: 'http://via.placeholder.com/300', order: 1, url: '/beam'},
    {id: 'section', title: 'Sectional Properties', desc: 'Properties of a Section', img: 'http://via.placeholder.com/300', order: 2, url: '/section'},
    {id: 'bar', title: 'Bar Chart', desc: 'A simple svg bar chart', img: 'http://via.placeholder.com/300', order: 3, url: '/barchart'},
    {id: 'pie', title: 'Pie Chart', desc: 'A simple svg pie chart', img: 'http://via.placeholder.com/300', order: 4, url: '/piechart'},
    {id: 'new', title: 'Add your own', desc: 'fork this repository and add your own interactive svg', img: '/assets/plus.png', order: 4, url: 'https://github.com/jchatkinson/ng-svg'},
  ]

  constructor() { }

  ngOnInit() {

  }

}
