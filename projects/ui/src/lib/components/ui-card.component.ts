import { Component } from '@angular/core';

@Component({
  selector: 'ui-card',
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
})
export class UiCardComponent {}
