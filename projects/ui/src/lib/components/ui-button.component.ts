import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiButton } from '../interfaces/ui-button';

@Component({
  selector: 'ui-button',
  template: `
    <button class="btn {{ buttonClass }}" *ngIf="button.path" [routerLink]="button.path">
      <i class="{{ button.icon }} mr-1" *ngIf="button.icon"></i>{{ button.label
      }}<i class="{{ button.iconAfter }} ml-1" *ngIf="button.iconAfter"></i>
    </button>
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
  @Input() button: UiButton;
  @Input() buttonClass: string;
  @Output() action = new EventEmitter();
}
