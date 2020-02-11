import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiLink } from '../../interfaces/ui-link'
import { UiButton } from '../../interfaces/ui-button'

@Component({
  selector: 'ui-card-header',
  template: `
    <h5 class="card-header d-flex justify-content-between">
      <div class="align-self-center" *ngIf="cardTitle || cardSubTitle || icon || iconAfter">
        <ui-label [icon]="icon" [iconAfter]="iconAfter" [label]="cardTitle"></ui-label>
        <small class="text-muted ml-2" *ngIf="cardSubTitle">{{ cardSubTitle }}</small>
      </div>
      <ng-content></ng-content>
      <div *ngIf="buttons?.length">
        <ng-container *ngFor="let button of buttons">
          <ui-button
            (action)="action.emit($event)"
            buttonClass="btn-sm p-0 ml-2"
            [button]="button"
          ></ui-button>
        </ng-container>
      </div>
    </h5>
  `,
})
export class UiCardHeaderComponent {
  @Input() icon?: string
  @Input() iconAfter?: string
  @Input() cardTitle: string
  @Input() cardSubTitle?: string
  @Input() buttons: UiButton[] | UiLink[]
  @Output() action = new EventEmitter()
}
