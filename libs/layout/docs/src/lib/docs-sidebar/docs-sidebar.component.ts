import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  selector: 'docs-sidebar',
  template: `
    <div class="ui-sidebar h-100 d-flex flex-column" [class.ui-sidebar-collapse]="collapsed">
      <div [class.flex-grow-1]="!collapsed" class="overflow-auto" *ngIf="!collapsed">
        <ng-container *ngFor="let link of links">
          <div>
            <docs-sidebar-item [basePath]="basePath" [link]="link"></docs-sidebar-item>
            <ng-container *ngIf="isRouteActive(link.path) && link.children && link.children.length">
              <ng-container *ngFor="let child of link.children">
                <docs-sidebar-item [basePath]="basePath" [link]="child" [child]="true"></docs-sidebar-item>
              </ng-container>
            </ng-container>
          </div>
        </ng-container>
      </div>
      <div
        class="d-flex ui-sidebar-header-top"
        [ngClass]="{ 'justify-content-center': collapsed, 'justify-content-end': !collapsed }"
      >
        <div (click)="toggleSidebar()" class="ui-collapse-icon-wrapper cursor-pointer">
          <i class="ui-sidebar-icon ui-collapse-icon"></i>
        </div>
      </div>
    </div>
  `,
})
export class DocsSidebarComponent {
  @Input() public basePath: string
  @Input() public links: UiLink[] = []
  @Input() public collapse

  private smallScreen = false

  constructor(private readonly breakpointObserver: BreakpointObserver, private readonly router: Router) {
    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe((result) => (this.smallScreen = result.matches))
  }

  isRouteActive(url: string, exact = false): boolean {
    return this.router.isActive(this.basePath ? this.basePath + url : url, exact)
  }

  get collapsed() {
    return typeof this.collapse === 'undefined' ? this.smallScreen : this.collapse
  }

  toggleSidebar() {
    if (typeof this.collapse === 'undefined') {
      this.collapse = !this.smallScreen
    } else {
      this.collapse = !this.collapse
    }
  }
}
