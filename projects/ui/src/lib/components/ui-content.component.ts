import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-content',
  template: `
    <div
      [class.container-xl]="!fluid"
      [class.container-fluid]="fluid"
      [class.my-md-5]="padding"
      [class.my-3]="padding"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class UiContentComponent {
  @Input() fluid = false
  @Input() padding = true
}
