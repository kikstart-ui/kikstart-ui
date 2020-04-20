import { Component, Input } from '@angular/core'
import { UiTab } from '../../interfaces/ui-tab'

@Component({
  selector: 'ui-tabs',
  template: `
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item" *ngFor="let tab of tabs">
        <a
          class="nav-link py-3"
          routerLinkActive="active"
          [routerLink]="tab.path"
          [queryParams]="tab.queryParams"
          >{{ tab.label }}</a
        >
      </li>
    </ul>
  `,
  styles: [
    `
      .nav-pills .nav-link.active {
        background-color: #303030;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0;
      }
    `,
  ],
})
export class UiTabsComponent {
  @Input() public tabs: UiTab[] = []
}
