import { Component, Input } from '@angular/core'
import { UiLink } from '../../interfaces/ui-link'
import { UiService } from '../../services/ui.service'

@Component({
  selector: 'ui-sidebar-item',
  template: `
    <div
      class="sidebar-item p-2"
      [class.child]="child"
      [class.active]="ui.isRouteActive(link.path, true)"
      [class.child-active]="ui.isRouteActive(link.path)"
      [routerLink]="link.path"
    >
      <ui-link
        [link]="link"
        [linkClass]="ui.isRouteActive(link.path, true) ? '' : 'text-muted'"
      ></ui-link>
      <ng-container *ngIf="link.children && link.children.length">
        <i
          *ngIf="!ui.isRouteActive(link.path)"
          class="fa fa-fw mt-1 fa-chevron-right pull-right"
        ></i>
        <i *ngIf="ui.isRouteActive(link.path)" class="fa fa-fw mt-1 fa-chevron-down pull-right"></i>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .sidebar-item {
        outline: none;
        cursor: pointer;
      }
      .sidebar-item:hover {
        background-color: #333;
      }
      .sidebar-item.child-active {
        border-left: 1px solid #333;
      }
      .active {
        font-weight: bold;
      }
      .child {
        padding-left: 20px;
        border-left: 1px solid #333;
        background-color: inherit;
      }
      .child ui-link {
        margin-left: 10px;
      }
      .child.active {
        border-right: 5px solid #333;
      }
    `,
  ],
})
export class UiSidebarItemComponent {
  @Input() child = false
  @Input() link: UiLink

  constructor(public ui: UiService) {}
}
