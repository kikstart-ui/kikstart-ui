import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButton } from '../interfaces/ui-button'

@Component({
  selector: 'ui-button',
  template: `
    <a
      class="btn {{ buttonClass }}"
      *ngIf="button.path"
      [routerLink]="button.path"
      [queryParams]="button.queryParams"
    >
      <i class="{{ button.icon }} mr-1" *ngIf="button.icon"></i>{{ button.label
      }}<i class="{{ button.iconAfter }} ml-1" *ngIf="button.iconAfter"></i>
    </a>
    <button
      class="btn {{ buttonClass }}"
      *ngIf="button.action"
      (click)="action.emit({ type: button.action, payload: button.payload })"
    >
      <i class="{{ button.icon }} mr-1" *ngIf="button.icon"></i>{{ button.label
      }}<i class="{{ button.iconAfter }} ml-1" *ngIf="button.iconAfter"></i>
    </button>
  `,
})
export class UiButtonComponent {
  @Input() button: UiButton
  @Input() buttonClass: string
  @Output() action = new EventEmitter()
}
