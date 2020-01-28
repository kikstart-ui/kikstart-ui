import { Component, Input } from '@angular/core'
import { UiLink } from '../../interfaces/ui-link'

@Component({
  selector: 'ui-link',
  template: `
    <a
      class="{{ link?.className || linkClass }}"
      *ngIf="path || link?.path"
      [routerLink]="path || link?.path"
      [queryParams]="link?.queryParams"
      ><ui-label
        [label]="label || link?.label"
        [icon]="link?.icon"
        [iconAfter]="link?.iconAfter"
      ></ui-label
    ></a>
    <a class="{{ link?.className || linkClass }}" *ngIf="link?.url" [attr.href]="link?.url"
      ><ui-label
        [label]="label || link?.label"
        [icon]="link?.icon"
        [iconAfter]="link?.iconAfter"
      ></ui-label
    ></a>
  `,
})
export class UiLinkComponent {
  @Input() link: UiLink
  @Input() path?: string
  @Input() label?: string
  @Input() linkClass?: string
}
