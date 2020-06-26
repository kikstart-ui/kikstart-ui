import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'docs-layout',
  template: `
    <div class="d-flex justify-content-between h-100">
      <div>
        <ng-content select="docs-sidebar"></ng-content>
      </div>
      <div class="flex-grow-1 h-100">
        <div class="d-flex h-100 justify-content-between flex-column">
          <div class="flex">
            <ng-content select="docs-navbar"></ng-content>
          </div>
          <div class="flex-grow-1 overflow-auto">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DocsLayoutComponent {
  constructor(public readonly router: Router) {}
}
