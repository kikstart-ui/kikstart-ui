import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-list-item',
  template: `
    <li class="list-group-item" [class.active]="active">
      <ng-content></ng-content>
    </li>
  `,
  styles: [],
})
export class UiListItemComponent {
  @Input() public active = false
}
