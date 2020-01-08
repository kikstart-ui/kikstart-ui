import { Component, Input } from '@angular/core'
import { UiLink } from '../interfaces/ui-link'

@Component({
  selector: 'ui-link',
  template: `
    <a
      class="{{ linkClass }}"
      *ngIf="path || link?.path"
      [routerLink]="path || link?.path"
      [queryParams]="link?.queryParams"
      ><i class="{{ link?.icon }}" *ngIf="link?.icon"></i>{{ label || link?.label
      }}<i class="{{ link?.iconAfter }}" *ngIf="link?.iconAfter"></i
    ></a>
    <a class="{{ linkClass }}" *ngIf="link?.url" [attr.href]="link?.url"
      ><i class="{{ link?.icon }}" *ngIf="link?.icon"></i>{{ label || link?.label
      }}<i class="{{ link?.iconAfter }}" *ngIf="link?.iconAfter"></i
    ></a>
  `,
})
export class UiLinkComponent {
  @Input() link: UiLink
  @Input() path?: string
  @Input() label?: string
  @Input() linkClass?: string
}
