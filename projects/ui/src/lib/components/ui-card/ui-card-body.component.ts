import { Component } from '@angular/core'

@Component({
  selector: 'ui-card-body',
  template: `
    <div class="card-body">
      <ng-content></ng-content>
    </div>
  `,
})
export class UiCardBodyComponent {}
