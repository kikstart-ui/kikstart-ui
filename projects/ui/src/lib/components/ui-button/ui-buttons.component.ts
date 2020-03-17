import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButton } from '../../interfaces/ui-button'

@Component({
  selector: 'ui-buttons',
  template: `
    <ng-container *ngFor="let button of buttons; let first = first; let last = last">
      <ui-button
        class="btn-group"
        [class.first]="first && !last"
        [class.middle]="!first && !last"
        [class.last]="last && !first"
        (action)="action.emit($event)"
        [button]="button"
        [buttonClass]="buttonClass"
        [payload]="payload"
      ></ui-button>
    </ng-container>
  `,
  styles: [
    `
      ::ng-deep .first .btn {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      ::ng-deep .middle .btn {
        border-left: 0;
        border-radius: 0;
      }
      ::ng-deep .last .btn {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    `,
  ],
})
export class UiButtonsComponent {
  @Input() buttons: UiButton[]
  @Input() buttonClass: string
  @Input() payload?: any
  @Output() action = new EventEmitter()
}
