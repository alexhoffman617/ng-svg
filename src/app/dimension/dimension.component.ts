import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Idim } from 'app/idim';

@Component({
  selector: '[app-dimension]',
  template: `
      <svg:path [attr.d]="addDim(dim.p1,dim.p2,dim.label)" stroke="#808080" fill="transparent" />
  `,
  styles: []
})
export class DimensionComponent implements OnInit, AfterViewInit {
  @Input() dim: Idim;

  constructor() {

   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('dim is', this.dim)
  }

  addDim(p1: number[], p2: number[], label: string) {
    let overrun = 5;
    let standoff = 10;
    let x1 = p1[0];
    let x2 = p2[0];
    let y1 = p1[1];
    let y2 = p2[1];
    let s = '';
    let a = -1*Math.atan((y2 - y1 / (x2 - x1)));
    let ca = Math.cos(a);
    let sa = Math.sin(a);
    let L = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    s = s + 'M ' + x1 + ' ' + y1; // starting point
    s = s + ' l ' + this.roundN(standoff * ca, 2) + ' ' + this.roundN(standoff * sa, 2); // first standoff line
    s = s + ' m ' + this.roundN(overrun * (ca + sa), 2) + ' ' + this.roundN(overrun * (sa - ca), 2); // move to dim line start point
    s = s + ' l ' + this.roundN(L * ca, 2) + ' ' + this.roundN(L * sa, 2); // dim line
    s = s + ' M ' + x2 + ' ' + y2; // move to second standoff line
    s = s + ' l ' + this.roundN(standoff * ca, 2) + ' ' + this.roundN(standoff * sa, 2); // second standoff line
    return s
  }

  // round to the specified number of decimal places (0=Math.Round() behavior)
  roundN(x: number, decimal: number) {
    let scale = Math.pow(10, decimal);
    return Math.round(x * scale) / scale;
  }

}
