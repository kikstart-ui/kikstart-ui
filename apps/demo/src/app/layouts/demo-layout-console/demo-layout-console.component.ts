import { Location } from '@angular/common'
import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { LayoutConsoleHelper } from '@kikstart-ui/layout-console'

const range = (start: number = 0, end: number = 10): number[] => Array.from({ length: end }, (v, k) => k + start)

@Component({
  template: `
    <console-layout>
      <console-navbar [brand]="{ navbarClasses: 'navbar-dark bg-dark' }">
        <span class="right">
          <a routerLink="/" class="ml-2 p-0" *ngIf="user">
            <img
              [attr.src]="user?.avatarUrl"
              width="30"
              height="30"
              class="d-inline-block rounded-circle"
              alt="User Avatar"
            />
          </a>
        </span>
      </console-navbar>
      <console-sidebar [links]="links" [baseLink]="basePath" [brand]="brand"> </console-sidebar>

      <div class="h-100 overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </console-layout>
  `,
})
export class DemoLayoutConsoleComponent {
  public brand = {
    logo: '/assets/logo.svg',
    title: 'Kikstart',
    route: '/',
  }

  public links = [
    LayoutConsoleHelper.header(' Lot of Pages', [
      ...range(1, 50).map((item) => {
        return LayoutConsoleHelper.link(`more-pages/page-${item}`, `More Page ${item}`, '')
      }),
    ]),
    LayoutConsoleHelper.header('More Pages', [
      ...range(1, 50).map((item) => {
        return LayoutConsoleHelper.link(`more-pages/page-${item}`, `More Page ${item}`, '')
      }),
    ]),
    LayoutConsoleHelper.header('Last group of Pages', [
      ...range(1, 50).map((item) => {
        return LayoutConsoleHelper.link(`more-pages/page-${item}`, `More Page ${item}`, '')
      }),
    ]),
  ]
  public basePath: string
  public user = {
    avatarUrl: 'https://avatars3.githubusercontent.com/u/36491?v=4',
  }
  constructor(private readonly location: Location, private readonly router: Router) {
    // this.basePath = this.location.path()
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        console.log(res.url)
      }
    })
  }
}
