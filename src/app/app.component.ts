import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GraphComponent } from './graph/graph.component';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <app-controls></app-controls>
  <app-graph [stats]="stats"></app-graph>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ControlsComponent)
  private controlscomponent: ControlsComponent;
  title = 'Working with SVGs!';
  stats = {};

  ngAfterViewInit() {
    this.stats = this.controlscomponent.stats;
  }


}
