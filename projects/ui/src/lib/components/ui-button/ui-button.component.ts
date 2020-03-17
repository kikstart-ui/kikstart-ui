import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButton } from '../../interfaces/ui-button'

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="isLink">
      <ui-link [linkClass]="btnClass" [link]="button"></ui-link>
    </ng-container>
    <ng-container *ngIf="isAction">
      <button
        [disabled]="disabled || button?.disabled"
        [class]="btnClass"
        (click)="emitAction(button, payload)"
      >
        <ui-loading-icon *ngIf="loading" [class.mr-2]="loadingClass" [icon]="loadingIcon">
        </ui-loading-icon>
        <ui-label
          [label]="button?.label"
          [icon]="button?.icon"
          [iconAfter]="button?.iconAfter"
        ></ui-label>
      </button>
    </ng-container>
    <ng-container *ngIf="isHandler">
      <button
        [disabled]="disabled || button?.disabled"
        [class]="btnClass"
        (click)="emitHandler(button, payload)"
      >
        <ui-loading-icon *ngIf="loading" [class.mr-2]="loadingClass" [icon]="loadingIcon">
        </ui-loading-icon>
        <ui-label
          [label]="button?.label"
          [icon]="button?.icon"
          [iconAfter]="button?.iconAfter"
        ></ui-label>
      </button>
    </ng-container>
  `,
})
export class UiButtonComponent {
  @Input() disabled = false
  @Input() loading = false
  @Input() payload?: any
  @Input() loadingIcon = 'fa-spinner'
  @Input() button: UiButton
  @Input() buttonClass?: string
  @Output() action = new EventEmitter()

  get loadingClass() {
    return this.button && (this.button.icon || this.button.iconAfter || this.button.label)
  }
  get btnClass() {
    return [
      'btn',
      this.button.className
        ? this.button.className
        : this.buttonClass
        ? this.buttonClass
        : 'btn-outline-info',
    ].join(' ')
  }
  get isAction() {
    return !this.isHandler && !this.isLink
  }

  get isHandler() {
    return this.button.handler
  }

  get isLink() {
    return this.button.path || this.button.url
  }

  emitAction(button: UiButton, payload: any) {
    this.action.emit({
      ...button,
      payload,
    })
  }

  emitHandler(button: UiButton, payload: any) {
    button.handler({
      ...button,
      payload,
    })
  }
}
