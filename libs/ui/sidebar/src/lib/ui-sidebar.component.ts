import { Component, Input } from '@angular/core'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  selector: 'ui-sidebar',
  template: `
    <div class="list-group">
      <ui-card-header *ngIf="icon || title" [icon]="icon" [title]="title"></ui-card-header>
      <ng-container *ngFor="let link of links">
        <div class="card-header list-unstyled" *ngIf="!link.path">
          <strong>{{ link.label }}</strong>
        </div>
        <div
          *ngIf="link.path"
          class="list-group-item cursor-pointer"
          [routerLink]="link.path"
          routerLinkActive="bg-secondary"
        >
          <ui-link [link]="link"></ui-link>
        </div>
      </ng-container>
    </div>
  `,
})
export class UiSidebarComponent {
  @Input() public icon: string
  @Input() public title: string
  @Input() public links: UiLink[] = []
}
