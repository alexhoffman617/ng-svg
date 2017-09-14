import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dataview',
  template: `
    <pre id="raw">{{ stats | json }}</pre>
  `,
  styles: []
})
export class DataviewComponent implements OnInit {
@Input() stats;

  constructor() { }

  ngOnInit() {
  }

}
