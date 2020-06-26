import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  selector: 'docs-sidebar-item',
  template: `
    <div
      class="docs-sidebar-item p-2"
      [class.child]="child"
      [class.active]="isRouteActive(link.path, true)"
      [class.child-active]="isRouteActive(link.path)"
      [routerLink]="link.path"
    >
      <ui-link [link]="link" [linkClass]="isRouteActive(link.path, true) ? 'text-primary' : 'text-muted'"></ui-link>
      <ng-container *ngIf="link.children && link.children.length && !child">
        <i *ngIf="!isRouteActive(link.path)" class="fa fa-fw mt-1 fa-chevron-right pull-right"></i>
        <i *ngIf="isRouteActive(link.path)" class="fa fa-fw mt-1 fa-chevron-down pull-right"></i>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .docs-sidebar-item {
        outline: none;
        cursor: pointer;
      }
      .docs-sidebar-item:hover {
        background-color: #333;
      }
      .docs-sidebar-item.child-active {
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
export class DocsSidebarItemComponent {
  @Input() public basePath: string
  @Input() child = false
  @Input() link: UiLink

  constructor(public readonly router: Router) {}

  isRouteActive(url: string, exact = false): boolean {
    return this.router.isActive(this.basePath ? this.basePath + url : url, exact)
  }
}
