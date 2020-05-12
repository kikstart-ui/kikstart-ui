import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiLink } from '../../interfaces/ui-link'
import { UiButton } from '../../interfaces/ui-button'

@Component({
  selector: 'ui-card-header',
  template: `
    <h5 class="card-header d-flex justify-content-between">
      <div class="align-self-center" *ngIf="title || description || icon || iconAfter">
        <ui-label [icon]="icon" [iconAfter]="iconAfter" [label]="title"></ui-label>
        <small class="text-muted ml-2" *ngIf="description">{{ description }}</small>
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
    </h5>
  `,
})
export class UiCardHeaderComponent {
  @Input() icon?: string
  @Input() iconAfter?: string
  @Input() title: string
  @Input() description?: string
  @Input() payload?: any
  @Input() buttons: UiButton[] | UiLink[]
  @Output() action = new EventEmitter()
  @Input() set cardSubTitle(description: string) {
    console.warn(`ui-card-header: 'cardSubTitle' input is deprecated, use 'description' instead`)
    this.description = description
  }

  @Input() set cardTitle(title: string) {
    console.warn(`ui-card-header: 'cardTitle' input is deprecated, use 'title' instead`)
    this.title = title
  }
}
