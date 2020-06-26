import { Component } from '@angular/core'

@Component({
  selector: 'web-layout',
  template: `
    <div class="d-flex flex-column justify-content-between h-100">
      <div>
        <ng-content select="header"></ng-content>
        <ng-content select="web-header"></ng-content>
      </div>
      <div class="flex-grow-1 h-100">
        <ng-content></ng-content>
      </div>
      <div>
        <ng-content select="web-footer"></ng-content>
        <ng-content select="footer"></ng-content>
      </div>
    </div>
  `,
})
export class WebLayoutComponent {}
