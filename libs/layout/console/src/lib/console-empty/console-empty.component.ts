import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'console-empty',
  template: `
    <div class="text-center my-5">
      <i class="fa {{ icon }} fa-5x text-muted"></i>
      <div [style.font-size.rem]="labelSize" class="my-3">{{ label }}</div>
      <p *ngIf="description">{{ description }}</p>
      <ng-content></ng-content>
    </div>
  `,
})
export class ConsoleEmptyComponent {
  @Input() public description: string
  @Input() public icon = 'fa-warning'
  @Input() public label = 'No data'
  @Input() public labelSize = 2
  @Output() public action = new EventEmitter()
}
