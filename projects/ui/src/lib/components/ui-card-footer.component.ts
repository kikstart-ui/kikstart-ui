import { Component } from '@angular/core'

@Component({
  selector: 'ui-card-footer',
  template: `
    <div class="card-footer">
      <ng-content></ng-content>
    </div>
  `,
})
export class UiCardFooterComponent {}
