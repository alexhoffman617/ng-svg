import { Component, OnInit } from '@angular/core';
import { GraphComponent } from '../graph/graph.component';
import { ControlsComponent } from '../controls/controls.component';
import { Istat, StatService } from 'app/stat.service';
@Component({
  selector: 'app-stats',
  template: `
  <app-controls></app-controls>
  <app-graph></app-graph>
  <app-dataview [stats]="stats"></app-dataview>
  `,
  styles: [],
  providers: [StatService]
})
export class StatsComponent implements OnInit {
  stats: Istat[];

  constructor(private statservice: StatService) { }

  ngOnInit() {
    this.stats = this.statservice.getStats();
  }

}
