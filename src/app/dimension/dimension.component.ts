import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimension',
  template: `
    <svg:g>
      <svg:path [attr.d]="addDim()" stroke="black" fill="transparent" />
    </g>
  `,
  styles: []
})
export class DimensionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addDim(p1: number[], p2: number[], label: string) {
    let overrun = 5;
    let standoff = 10;
    let x1 = p1[0];
    let x2 = p2[0];
    let y1 = p1[1];
    let y2 = p2[1];
    let s = '';
    let a = Math.atan((y2 - y1 / (x2 - x1)));
    let ca = Math.cos(a);
    let sa = Math.sin(a);
    s = s + 'M'+x1+' '+y1; //starting point
    s = s + ' l'+standoff*ca+' '+standoff*sa; //standoff line
    s = s + ' m'+

    return s
  }

  // round to the specified number of decimal places (0=Math.Round() behavior)
  roundN(x: number, decimal: number) {
    let scale = Math.pow(10, decimal);
    return Math.round(x * scale) / scale;
  }

}
