import { Component } from '@angular/core';
import { LayoutConsoleHelper } from '@kikstart-ui/layout-console';

@Component({
  template: `
    <console-layout>
      <console-navbar [brand]="{ navbarClasses: 'navbar-dark bg-dark' }">
        <span class="right">
          <a routerLink="/playground/profile" class="ml-2 p-0" *ngIf="user">
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
      <console-sidebar
        [homeLink]="homeLink"
        [links]="links"
        baseLink="/console"
        [brand]="brand"
      >
      </console-sidebar>

      <div class="h-100 overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </console-layout>
  `,
})
export class ConsoleComponent {
  public brand = {
    logo: '/assets/logo.svg',
    title: 'Kikstart',
    route: '/',
  };
  public homeLink = LayoutConsoleHelper.link(
    'dashboard',
    'Dashboard',
    'fa-dashboard'
  );
  public links = [
    LayoutConsoleHelper.header('Pages', [
      LayoutConsoleHelper.link('components', 'Components', 'fa-users'),
      LayoutConsoleHelper.link('layouts', 'Layouts', 'fa-tablet'),
      LayoutConsoleHelper.link('themes', 'Themes', 'fa-paint-brush'),
    ]),
    LayoutConsoleHelper.header('Settings', [
      LayoutConsoleHelper.link('users', 'Users', 'fa-users'),
    ]),
  ];
  public user = {
    avatarUrl: 'https://avatars3.githubusercontent.com/u/36491?v=4',
  };
}
