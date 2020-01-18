import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButton } from '../interfaces/ui-button'

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="button?.path || button?.url">
      <ui-link
        linkClass="btn {{ button.className || buttonClass || 'btn-outline-info' }}"
        [link]="button"
      ></ui-link>
    </ng-container>
    <button
      *ngIf="button?.action"
      [disabled]="button.disabled"
      class="btn {{ button.className || buttonClass || 'btn-outline-info' }}"
      (click)="action.emit({ type: button.action, payload: button.payload })"
    >
      <ui-loading-icon *ngIf="loading" [class.mr-2]="loadingClass" [icon]="loadingIcon">
      </ui-loading-icon>
      <ui-label
        [label]="button?.label"
        [icon]="button?.icon"
        [iconAfter]="button?.iconAfter"
      ></ui-label>
    </button>
    <button
      *ngIf="button?.handler"
      [disabled]="button.disabled"
      class="btn {{ button.className || buttonClass || 'btn-outline-info' }}"
      (click)="button.handler({ type: button.action, payload: button.payload })"
    >
      <ui-loading-icon *ngIf="loading" [class.mr-2]="loadingClass" [icon]="loadingIcon">
      </ui-loading-icon>
      <ui-label
        [label]="button?.label"
        [icon]="button?.icon"
        [iconAfter]="button?.iconAfter"
      ></ui-label>
    </button>
  `,
})
export class UiButtonComponent {
  @Input() loading = false
  @Input() loadingIcon = 'fa-spinner'
  @Input() button: UiButton
  @Input() buttonClass: string
  @Output() action = new EventEmitter()

  get loadingClass() {
    return this.button && (this.button.icon || this.button.iconAfter || this.button.label)
  }
}
