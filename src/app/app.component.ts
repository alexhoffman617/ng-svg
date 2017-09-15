import { Component, ViewChild, OnInit } from '@angular/core';
import { GraphComponent } from './graph/graph.component';
import { ControlsComponent } from './controls/controls.component';
import { Istat, StatService } from 'app/stat.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <app-controls></app-controls>
  <app-graph></app-graph>
  <app-dataview [stats]="stats"></app-dataview>
  `,
  styles: [],
  providers: [StatService]
})
export class AppComponent implements OnInit {
  title = 'SVG Plot';
  stats: Istat[];
  constructor(private statservice: StatService) {
   }

  ngOnInit() {
    this.stats = this.statservice.getStats();
    console.log(this.stats);
  }
}
