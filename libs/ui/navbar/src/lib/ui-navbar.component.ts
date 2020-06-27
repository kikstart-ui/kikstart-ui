import { Component, Input } from '@angular/core'
import { UiBrand, UiBrandSizes } from '@kikstart-ui/ui-brand'

@Component({
  selector: 'ui-navbar',
  template: `
    <nav class="navbar navbar-expand-lg {{ navbarClass }}">
      <a class="navbar-brand" [routerLink]="homeLink">
        <ng-container *ngIf="!brand">
          <img *ngIf="logo" [attr.src]="logo" height="30" class="d-inline-block align-top" alt="Logo" />
          {{ title }}
        </ng-container>
        <ng-container *ngIf="brand">
          <ui-brand [brand]="brand" [size]="brandSize"></ui-brand>
        </ng-container>
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <ng-container *ngFor="let link of links">
            <li class="nav-item mr-2" routerLinkActive="text-primary" [routerLinkActiveOptions]="{ exact: true }">
              <a [routerLink]="link.path">{{ link.label }}</a>
            </li>
          </ng-container>
        </ul>
      </div>
    </nav>
  `,
})
export class UiNavbarComponent {
  @Input() public brand: UiBrand
  @Input() public brandSize: UiBrandSizes = 'sm'
  @Input() public logo: string
  @Input() public homeLink = '/'
  @Input() public links: { path: string; label: string }[]
  @Input() public style: 'dark' | 'light' | 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'warning' =
    'light'
  @Input() public title: string

  get navbarClass(): string {
    return `navbar-${this.style} bg-${this.style} `
  }
}
