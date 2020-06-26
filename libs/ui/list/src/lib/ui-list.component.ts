import { Component } from '@angular/core'

@Component({
  selector: 'ui-list',
  template: `
    <div class="list-group">
      <ng-content></ng-content>
    </div>
  `,
})
export class UiListComponent {}
