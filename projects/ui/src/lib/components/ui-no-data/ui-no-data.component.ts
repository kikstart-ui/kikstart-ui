import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-no-data',
  template: `
    <div>
      <div class="text-center my-5">
        <i class="fa {{ icon }} fa-5x mb-5 text-muted"></i>
        <h3>{{ label }}</h3>
        <p *ngIf="description">{{ description }}</p>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class UiNoDataComponent {
  @Input() public description: string
  @Input() public icon = 'fa-warning'
  @Input() public label = 'No data'
}
