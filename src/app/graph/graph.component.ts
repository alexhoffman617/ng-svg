import { Component, Input, OnInit } from '@angular/core';
import { Istat } from 'app/stat.service';


@Component({
  selector: 'app-graph',
  template: `
    <div>
      <svg width="200" height="200">
        <g>
          <polygon [attr.points]="points"></polygon>
          <circle cx="100" cy="100" r="80"></circle>
          <!-- <text *ngFor="let stat of stats; index as i">{{stat.label}}</text> -->
        </g>
      </svg>
    </div>
  `,
  styles: [`
    polygon {
      fill: #42b983;
      opacity: .75; 
    }
    circle {
      fill: transparent;
      stroke: #999
    }
    text {
      font-family: Helvetica Neue, Arial, sans-serif;
      font-size: 10px;
      fill: #666;
    }
    label {
      display: inline-block;
      margin-left: 10px;
      width: 20px;
    }
  `]
})

export class GraphComponent implements OnInit {
  @Input() stats: Istat[];
  points: string;

  constructor() {
    console.log('stats in constructor is', this.stats);
  }

  ngOnInit() {
    this.points = this.computePoints(this.stats);
    console.log('stats in OnInit() is', this.stats);
    console.log('points is', this.points);
  }

  // math helper...
  valueToPoint (value: number, index: number, total: number): Ipoint {
    let point: Ipoint;
    let x     = 0;
    let y     = -value * 0.8;
    let angle = Math.PI * 2 / total * index;
    let cos   = Math.cos(angle);
    let sin   = Math.sin(angle);
    let tx    = x * cos - y * sin + 100;
    let ty    = x * sin + y * cos + 100;
    point.x = tx;
    point.y = ty;
    return point;
  }

  computePoints(s): string {
    const total: number = s.length;
    let points = '';
    let point: Ipoint;
    for (let i = 0; i < total; i++) {
      point = this.valueToPoint(s[i].value, i, total);
      points.concat(point.x.toString(), ',', point.y.toString(), ' ');
    }
    return points;
  }

}

export interface Ipoint {
  x: number;
  y: number;
}
