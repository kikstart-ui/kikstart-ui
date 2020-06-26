import { Component, Input } from '@angular/core'
import { ConsoleBrand } from './console.brand'

@Component({
  selector: 'console-navbar',
  template: `
    <nav class="navbar {{ classes }}">
      <div>
        <a class="d-flex navbar-brand p-0" [style.line-height]="0" [routerLink]="brand?.route">
          <img
            *ngIf="brand?.logo"
            width="30"
            height="30"
            alt="Logo"
            [attr.src]="brand?.logo"
            [class.mr-2]="brand?.title"
          />
          <span class="align-self-center" *ngIf="!collapsed">
            {{ brand?.title }}
          </span>
        </a>
        <ng-content select=".left"></ng-content>
      </div>
      <div class="navbar-expand align-self-center">
        <ng-content select=".right"></ng-content>
      </div>
    </nav>
  `,
})
export class ConsoleNavbarComponent {
  @Input() collapsed = false
  @Input() brand: ConsoleBrand

  get classes() {
    return this.brand?.navbarClasses
  }
}
