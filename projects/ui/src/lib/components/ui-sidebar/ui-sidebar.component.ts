import { Component, Input } from '@angular/core'
import { UiLink } from '../../interfaces/ui-link'
import { UiService } from '../../services/ui.service'

@Component({
  selector: 'ui-sidebar',
  template: `
    <div class="sidebar">
      <ng-container *ngFor="let link of links">
        <div>
          <ui-sidebar-item [link]="link"></ui-sidebar-item>
          <ng-container
            *ngIf="ui.isRouteActive(link.path) && link.children && link.children.length"
          >
            <ng-container *ngFor="let child of link.children">
              <ui-sidebar-item [link]="child" [child]="true"></ui-sidebar-item>
            </ng-container>
          </ng-container>
        </div>
      </ng-container>
    </div>
  `,
})
export class UiSidebarComponent {
  @Input() public links: UiLink[] = []

  constructor(public ui: UiService) {}
}
