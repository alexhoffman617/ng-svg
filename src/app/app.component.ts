import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <app-controls></app-controls>
  <app-graph></app-graph>
  `,
  styles: []
})
export class AppComponent {
  title = 'Working with SVGs!';
}
