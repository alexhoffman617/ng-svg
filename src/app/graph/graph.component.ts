import { Component, Input, OnInit } from '@angular/core';
import { StatService, Istat } from 'app/stat.service';


@Component({
  selector: 'app-graph',
  template: `
    <div>
      <svg width="300" height="200">
        <g>
          <polygon [attr.points]="computePoints(stats)"></polygon>
          <circle cx="100" cy="100" r="80"></circle>
          <text *ngFor="let stat of stats; index as i" 
            [attr.x]="labelPoint(stats,i,'x')"
            [attr.y]="labelPoint(stats,i,'y')">
            {{stat.label}}
          </text>
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
  stats: Istat[];
  polypoints: string;
  points: Ipoint[];
  total: number;

  constructor(private statservice: StatService) {
  }

  ngOnInit() {
    this.stats = this.statservice.getStats();
    this.total = this.stats.length;
    this.polypoints = this.computePoints(this.stats);
  }

  // math helper...
  valueToPoint (value: number, index: number, total: number): Ipoint {
    let point: Ipoint = {x: 0, y: 0};
    let x     = 0;
    let y     = -value * 0.8;
    let angle = Math.PI * 2 / total * index;
    let cos   = Math.cos(angle);
    let sin   = Math.sin(angle);
    let tx    = x * cos - y * sin + 100;
    let ty    = x * sin + y * cos + 100;
    point.x = Math.round(tx);
    point.y = Math.round(ty);
    return point;
  }

  labelPoint(stats: Istat[], i: number, d: string): number {
    let coord;
    let total = stats.length;
    let point = this.valueToPoint(stats[i].value, i, total);
    if (d === 'x') {
      coord = point.x;
    } else {
      coord = point.y;
    }
    return coord;
  }

  computePoints(s: Istat[]): string {
    const total: number = s.length;
    let points = '';
    for (let i = 0; i < total; i++) {
      let point = this.valueToPoint(s[i].value, i, total);
      let str = point.x.toString() + ',' + point.y.toString() + ' ';
      points = points + str;
    }
    return points;
  }

}

export interface Ipoint {
  x: number;
  y: number;
}
