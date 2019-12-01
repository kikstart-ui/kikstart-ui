import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-content',
  template: `
    <div [class.container]="!fluid" [class.container-fluid]="fluid" [class.my-5]="padding">
      <ng-content></ng-content>
    </div>
  `,
})
export class UiContentComponent {
  @Input() fluid = false;
  @Input() padding = true;
}
