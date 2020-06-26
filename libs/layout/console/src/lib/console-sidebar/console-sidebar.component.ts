import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ConsoleBrand } from '../console-navbar/console.brand'
import { ConsoleSidebarLink } from './console-sidebar-link'

@Component({
  selector: 'console-sidebar',
  template: `
    <div class="ui-sidebar bg-darker h-100 d-flex flex-column" [class.ui-sidebar-collapse]="collapsed">
      <console-navbar [collapsed]="collapsed" [brand]="brand"></console-navbar>
      <div
        class="d-flex justify-content-between ui-sidebar-header-top cursor-pointer"
        [class.flex-column]="collapsed"
        *ngIf="homeLink || settingsLink"
      >
        <a
          *ngIf="homeLink"
          [routerLink]="homeLink.path"
          routerLinkActive="text-primary"
          [routerLinkActiveOptions]="{ exact: false }"
          class="flex-grow-1"
        >
          <i *ngIf="homeLink.icon" class="ui-sidebar-icon fa fa-fw {{ homeLink.icon }} mr-3 "></i>
          <span class="ui-sidebar-label" *ngIf="homeLink.label">{{ homeLink.label }}</span>
        </a>
        <div [class.mt-3]="collapsed" *ngIf="settingsLink">
          <a [routerLink]="settingsLink.path" routerLinkActive="text-primary">
            <i class="ui-sidebar-icon fa fa-fw {{ settingsLink.icon }}"></i>
          </a>
        </div>
      </div>
      <div [class.flex-grow-1]="!collapsed" class="overflow-auto">
        <ng-container *ngFor="let link of _links">
          <div
            class="ui-sidebar-group"
            [class.ui-sidebar-group-visible]="showRouteLink(link)"
            [class.ui-sidebar-group-hidden]="!showRouteLink(link)"
          >
            <div
              class="ui-sidebar-group-header cursor-pointer noselect"
              *ngIf="link.header"
              (click)="toggleChildren(link)"
            >
              <div class="d-flex justify-content-between sidebar-header">
                <div class="d-flex align-self-center text-truncate" style="max-width: 200px">
                  <div>
                    <div>
                      <strong class="text-truncate">{{ link.label }}</strong>
                    </div>
                    <div *ngIf="!showRouteLink(link)" class="ui-sidebar-item-summary">
                      {{ mapChildren(link.children) }}
                    </div>
                  </div>
                </div>
                <div class="d-flex align-self-start mt-1 ui-sidebar-group-icon text-muted">
                  <i class="ui-sidebar-chevron-right"></i>
                </div>
              </div>
            </div>
            <div
              [class.ui-sidebar-group-padding-bottom]="showRouteLink(link)"
              [class.ui-sidebar-group-padding-top]="link?.children?.length"
            >
              <ng-container *ngIf="link.children">
                <ng-container *ngFor="let child of link.children">
                  <div
                    *ngIf="child.path && showRouteLink(link)"
                    [routerLink]="child.path"
                    class="ui-sidebar-item ui-sidebar-group-link cursor-pointer noselect"
                    routerLinkActive="text-primary"
                  >
                    <i *ngIf="child.icon" class="ui-sidebar-icon fa fa-fw {{ child.icon }} mr-3 "></i>
                    <a
                      (click)="handleChildClick()"
                      [routerLink]="child.path"
                      routerLinkActive="text-primary"
                      class="ui-sidebar-label"
                      *ngIf="child.label"
                      >{{ child.label }}</a
                    >
                  </div>
                </ng-container>
              </ng-container>
            </div>
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
export class ConsoleSidebarComponent implements OnInit {
  public show = {}
  @Input() baseLink: string
  @Input() collapse
  @Input() brand: ConsoleBrand
  @Input() homeLink?: ConsoleSidebarLink
  @Input() settingsLink?: ConsoleSidebarLink
  @Input() links?: ConsoleSidebarLink[] = []
  public _links: ConsoleSidebarLink[]

  private smallScreen = false

  constructor(private readonly breakpointObserver: BreakpointObserver, private readonly router: Router) {
    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe((result) => (this.smallScreen = result.matches))
  }

  public ngOnInit() {
    this._links = this.getLinks()
  }

  get collapsed() {
    return typeof this.collapse === 'undefined' ? this.smallScreen : this.collapse
  }

  toggleSidebar() {
    if (typeof this.collapse === 'undefined') {
      this.collapse = false
    } else {
      this.collapse = !this.collapse
    }
  }
  toggleChildren(link: ConsoleSidebarLink) {
    this.show[link.label] = !this.show[link.label]
  }

  mapChildren(links: ConsoleSidebarLink[] = []) {
    return links
      .filter((l) => l.label)
      .map((l) => l.label)
      .join(', ')
  }

  showRouteLink(link: ConsoleSidebarLink) {
    return typeof this.show[link.label] === 'undefined' ? link.active : this.show[link.label]
  }

  isRouteActive(url: string, exact = false): boolean {
    return this.router.isActive(url, exact)
  }

  getLinks() {
    return this.links?.map((link) => {
      const activeChildren = link.children?.find((child) => {
        const route = this.baseLink + '/' + child.path

        return this.isRouteActive(route.replace(/\/\//g, '/'))
      })

      this.show[link.label] = !!activeChildren
      return {
        ...link,
        active: !!activeChildren,
      }
    })
  }

  public handleChildClick() {
    if (this.smallScreen) {
      this.collapse = true
    }
  }
}
