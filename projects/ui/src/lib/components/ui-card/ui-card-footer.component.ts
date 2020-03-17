import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButton } from '../../interfaces/ui-button'
import { UiLink } from '../../interfaces/ui-link'

@Component({
  selector: 'ui-card-footer',
  template: `
    <div class="card-footer d-flex justify-content-between">
      <div class="align-self-center">
        <ng-container *ngIf="title || description || icon || iconAfter">
          <ui-label [icon]="icon" [iconAfter]="iconAfter" [label]="title"></ui-label>
          <small class="text-muted ml-2" *ngIf="description">{{ description }}</small>
        </ng-container>
        <ng-content select=".left"></ng-content>
      </div>
      <ng-content></ng-content>
      <div class="align-self-start">
        <ng-content select=".right"></ng-content>
        <ng-container *ngIf="buttons?.length">
          <ng-container *ngFor="let button of buttons">
            <ui-button
              (action)="action.emit($event)"
              buttonClass="btn-sm p-0 ml-2"
              [payload]="payload"
              [button]="button"
            ></ui-button>
          </ng-container>
        </ng-container>
      </div>
    </div>
  `,
})
export class UiCardFooterComponent {
  @Input() icon?: string
  @Input() iconAfter?: string
  @Input() title: string
  @Input() description?: string
  @Input() payload?: any
  @Input() buttons: UiButton[] | UiLink[]
  @Output() action = new EventEmitter()
}
