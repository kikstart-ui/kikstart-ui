import { Component, Input } from '@angular/core'

import { UiBrand } from '../../interfaces/ui-brand'
import { UiLink } from '../../interfaces/ui-link'

@Component({
  selector: 'ui-header',
  template: `
    <header>
      <nav class="navbar navbar-expand-md navbar-{{ style }} bg-{{ style }}">
        <div [class.container-xl]="!fluid" [class.container-fluid]="fluid">
          <a class="navbar-brand" routerLink="/">
            <ui-brand [brand]="brand"></ui-brand>
          </a>
          <button class="navbar-toggler" type="button" (click)="toggleNavBar()">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" [ngClass]="{ show: navBarOpen }">
            <div class="mr-auto"></div>
            <ul class="navbar-nav mr-0">
              <li class="nav-item" *ngFor="let link of links" routerLinkActive="active">
                <ui-link [link]="link" linkClass="nav-link"></ui-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `,
})
export class UiHeaderComponent {
  @Input() public brand: UiBrand
  @Input() public fluid = false
  @Input() public links: UiLink[] = []
  @Input() public style: 'light' | 'dark' = 'dark'

  public navBarOpen = false

  toggleNavBar() {
    this.navBarOpen = !this.navBarOpen
  }
}
