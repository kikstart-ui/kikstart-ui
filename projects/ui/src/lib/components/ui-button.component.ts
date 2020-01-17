import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButton } from '../interfaces/ui-button'

@Component({
  selector: 'ui-button',
  template: `
    <a
      *ngIf="button?.path"
      class="btn {{ button.className || buttonClass || 'btn-outline-info' }}"
      [routerLink]="button.path"
      [queryParams]="button.queryParams"
    >
      <i *ngIf="button?.icon" class="fa fa-fw {{ button.icon }}" [class.mr-2]="button.label"></i
      >{{ button.label
      }}<i
        *ngIf="button?.iconAfter"
        class="fa fa-fw {{ button.iconAfter }}"
        [class.ml-2]="button.label"
      ></i>
    </a>
    <button
      *ngIf="button?.action"
      [disabled]="button.disabled"
      class="btn {{ button.className || buttonClass || 'btn-outline-info' }}"
      (click)="action.emit({ type: button.action, payload: button.payload })"
    >
      <i *ngIf="button?.icon" class="fa fa-fw {{ button.icon }}" [class.mr-2]="button.label"></i
      >{{ button.label
      }}<i
        *ngIf="button?.iconAfter"
        class="fa fa-fw {{ button.iconAfter }}"
        [class.ml-2]="button.label"
      ></i>
    </button>
    <button
      *ngIf="button?.handler"
      [disabled]="button.disabled"
      class="btn {{ button.className || buttonClass || 'btn-outline-info' }}"
      (click)="button.handler({ type: button.action, payload: button.payload })"
    >
      <i *ngIf="button?.icon" class="fa fa-fw {{ button.icon }}" [class.mr-2]="button.label"></i
      >{{ button.label
      }}<i
        *ngIf="button?.iconAfter"
        class="fa fa-fw {{ button.iconAfter }}"
        [class.ml-2]="button.label"
      ></i>
    </button>
  `,
})
export class UiButtonComponent {
  @Input() button: UiButton
  @Input() buttonClass: string
  @Output() action = new EventEmitter()
}
