import { Component, Input } from '@angular/core';
import { Istat, StatService } from 'app/stat.service';

// app-controls is a bunch of knobs/dials/buttons to change the svg

@Component({
  selector: 'app-controls',
  template: `
  <div>  
    <div *ngFor="let stat of stats">
      <label>{{stat.label}}</label>
      <input type="range" [(ngModel)]="stat.value" min="0" max="100">
      <span>{{stat.value}}</span>
      <button (click)="removeStat(stat)" class="remove">X</button>
    </div>
    <form id="add">
      <input name="newlabel" [(ngModel)]="newLabel">
      <button (click)="addStat()">Add a Stat</button>
    </form>
  </div>
  `,
  styles: []
})
export class ControlsComponent {
  @Input() stats: Istat[];
  newLabel: string;
  statservice: StatService;

  constructor(statservice: StatService) {
    this.statservice = statservice;
  }

  addStat() {
    if (!this.newLabel) { return; } // do nothing if empty
    this.statservice.addStat(this.newLabel);
    this.newLabel = '';
  }
  removeStat(s: Istat) {
    this.statservice.removeStat(s);
  }

}

