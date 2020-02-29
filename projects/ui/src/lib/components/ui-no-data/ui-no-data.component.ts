import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButton } from '../../interfaces/ui-button'

@Component({
  selector: 'ui-no-data',
  template: `
    <div>
      <div class="text-center my-5">
        <i class="fa {{ icon }} fa-5x text-muted"></i>
        <h3 class="my-3">{{ label }}</h3>
        <p *ngIf="description">{{ description }}</p>
        <div class="mt-5" *ngIf="button">
          <ui-button (action)="action.emit($event)" [button]="button"></ui-button>
        </div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class UiNoDataComponent {
  @Input() public button: UiButton
  @Input() public description: string
  @Input() public icon = 'fa-warning'
  @Input() public label = 'No data'
  @Output() public action = new EventEmitter()
}
