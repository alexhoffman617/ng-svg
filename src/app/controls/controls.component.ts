import { Component } from '@angular/core';

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
    <pre id="raw">{{ stats | json }}</pre>
  </div>
  `,
  styles: []
})
export class ControlsComponent {
  newLabel: string;
  stats: Istat[] = [
    {label: 'A', value: 100},
    {label: 'B', value: 100},
    {label: 'C', value: 100},
    {label: 'D', value: 100},
    {label: 'E', value: 100},
    {label: 'F', value: 100}
  ]
  constructor() { }

  addStat() {
    if (!this.newLabel) { return; } // do nothing if empty
    this.stats.push({
      label: this.newLabel,
      value: 100
    });
    this.newLabel = '';
  }
  removeStat(s: Istat) {
    if(this.stats.length > 3) {
      this.stats.splice(this.stats.indexOf(s), 1);
    } else {
      alert('you need atleast 3 stats!');
    }
  }

}

export interface Istat {
  label: string;
  value: number;
}

export interface Ipoint {
  x: number;
  y: number;
}
