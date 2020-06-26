import { Component, Input } from '@angular/core'
import { ConsoleLink } from '../console-sidebar/console-link'

@Component({
  selector: 'console-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" *ngFor="let link of tabs">
        <a routerLinkActive="active" class="nav-link" [routerLink]="link.path">
          <i *ngIf="link.icon" class="fa fa-fw {{ link.icon }} mr-2 "></i>
          <span *ngIf="link.label">{{ link.label }}</span>
        </a>
      </li>
    </ul>
  `,
})
export class ConsoleTabsComponent {
  @Input() tabs: ConsoleLink[]
}
