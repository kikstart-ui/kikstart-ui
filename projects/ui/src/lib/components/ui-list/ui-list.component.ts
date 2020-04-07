import { Component } from '@angular/core'

@Component({
  selector: 'ui-list',
  template: `
    <ul class="list-group">
      <ng-content></ng-content>
    </ul>
  `,
})
export class UiListComponent {}
