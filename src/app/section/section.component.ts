import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
  <h2>{{title}}</h2>
  <label>h</label>
  <input type="number" name="h" [(ngModel)]="h">
  <label>b</label>
  <input type="number" name="b" [(ngModel)]="b">  
  <div>
  <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <path [attr.d]="pathIshape(x1,y1,h,b,tw,tf)" fill="transparent" stroke="black"/>
  </svg>
</div>
  `,
  styles: []
})
export class SectionComponent implements OnInit {
  title = 'Standard steel shapes with dimension labels';
  dims: Idim[] = [];
  x1 = 10
  y1 = 10
  h = 200
  b = 100
  tw = 6
  tf = 15
  path: string;

  constructor() { }

  ngOnInit() {
    this.path = this.pathIshape(this.x1, this.y1, this.h, this.b, this.tw, this.tf);
  }

  // addDimension adds a linear dimension with label from pt (x1,y1) to (x2,y2)
  addDimension(x1: number, y1: number, x2: number, y2: number, label: string) {
    this.dims.push({x1:x1,y1:y1,x2:x2,y2:y2,label:label})
  }

  pathIshape(x1,y1,h,b,tw,tf) {
    //construct the string for svg path command
    let a = (b-tw)/2;
    let hi = h - 2*tf;
    let s = ' ';
    let str = 'M '+x1+s+y1+' h '+b+' v '+tf+' h '+(-1*a)+' v '+hi+' h '+a+' v '+tf+' h '+(-b)+' v '+(-tf)+' h '+a+' v '+(-hi)+' h '+(-a)+         ' z';
    return str
  }

}

export interface Idim {
  x1: number,
  y1: number,
  x2: number,
  y2:number,
  label: string
}