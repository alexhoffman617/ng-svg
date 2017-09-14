import { Injectable } from '@angular/core';

@Injectable()
export class StatService {
  stats: Istat[] = [
    {label: 'A', value: 100},
    {label: 'B', value: 100},
    {label: 'C', value: 100},
    {label: 'D', value: 100},
    {label: 'E', value: 100},
    {label: 'F', value: 100}
  ];

  constructor() { }

  addStat(newLabel: string) {
    if (!newLabel) { return; } // do nothing if empty
    this.stats.push({
      label: newLabel,
      value: 100
    });
  }
  removeStat(s: Istat) {
    if (this.stats.length > 3) {
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
