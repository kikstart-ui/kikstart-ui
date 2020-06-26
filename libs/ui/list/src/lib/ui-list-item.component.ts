import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core'
import { UiButton } from '@kikstart-ui/ui-button'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  selector: 'ui-list-item',
  template: `
    <div>
      <div class="d-flex justify-content-between">
        <div class="align-self-center flex-grow-1" *ngIf="title || description || link || icon || iconAfter">
          <ui-link *ngIf="link" [link]="link"></ui-link>
          <ui-label [icon]="icon" [iconAfter]="iconAfter" [label]="title"></ui-label>
          <small class="text-muted ml-2" *ngIf="description">{{ description }}</small>
          <ng-content select=".left"></ng-content>
        </div>
        <div class="align-self-center">
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
      <ng-content select=".bottom"></ng-content>
    </div>
  `,
})
export class UiListItemComponent {
  @Input() public active = false
  @Input() public buttons: UiButton[]
  @Input() public description?: string
  @Input() public icon?: string
  @Input() public iconAfter?: string
  @Input() public payload?: Record<string, unknown>
  @Input() public link?: UiLink
  @Input() public title?: string
  @Output() public action = new EventEmitter()

  @HostBinding('class.bg-secondary') get listGroupActive() {
    return this.active
  }
  @HostBinding('class.list-group-item') listGroupItem = true
}
