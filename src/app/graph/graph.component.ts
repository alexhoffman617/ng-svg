import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-graph',
  template: `
    <div>
      <svg width="200" height="200"></svg>
    </div>
  `,
  styles: []
})

export class GraphComponent implements OnInit {
  @Input() stats;

  constructor() { }

  ngOnInit() {
  }

  // math helper...
valueToPoint (value, index, total) {
  let x     = 0;
  let y     = -value * 0.8;
  let angle = Math.PI * 2 / total * index;
  let cos   = Math.cos(angle);
  let sin   = Math.sin(angle);
  let tx    = x * cos - y * sin + 100;
  let ty    = x * sin + y * cos + 100;
  return {
    x: tx,
    y: ty
  };
}

}
