import { Component, Input } from '@angular/core'
import { UiLink } from '../../interfaces/ui-link'

@Component({
  selector: 'ui-links',
  template: `
    <ng-container *ngIf="links.length">
      <ui-link *ngFor="let link of links" [link]="link" [linkClass]="linkClass"></ui-link>
    </ng-container>
  `,
})
export class UiLinksComponent {
  @Input() links: UiLink[] = []
  @Input() linkClass: string
}
