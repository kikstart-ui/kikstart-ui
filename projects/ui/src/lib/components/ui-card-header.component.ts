import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiLink } from '../interfaces/ui-link'
import { UiButton } from '../interfaces/ui-button'

@Component({
  selector: 'ui-card-header',
  template: `
    <ng-container>
      <div class="pull-right p-1 mr-2">
        <ng-container *ngFor="let button of buttons">
          <ui-link *ngIf="!button.action" [link]="button" linkClass="btn btn-sm"></ui-link>
          <ui-button
            *ngIf="button.action"
            (action)="action.emit($event)"
            [button]="button"
          ></ui-button>
        </ng-container>
      </div>
      <ng-container>
        <h5 class="card-header">
          <i *ngIf="icon" class="mr-2 {{ icon }}"></i>
          {{ cardTitle }}
          <i *ngIf="iconAfter" class="ml-2 {{ iconAfter }}"></i>
          <small class="text-muted ml-2" *ngIf="cardSubTitle">{{ cardSubTitle }}</small>
          <ng-content></ng-content>
        </h5>
      </ng-container>
    </ng-container>
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
