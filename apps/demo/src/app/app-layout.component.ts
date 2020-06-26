import { Component } from '@angular/core'
import { LayoutConsoleHelper } from '@kikstart-ui/layout-console'

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
      <console-sidebar [links]="links" baseLink="/" [brand]="brand"> </console-sidebar>

      <div class="h-100 overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </console-layout>
  `,
})
export class AppLayoutComponent {
  public brand = {
    logo: '/assets/logo.svg',
    title: 'Kikstart',
    route: '/',
  }

  public links = [
    LayoutConsoleHelper.header('Components', [
      LayoutConsoleHelper.link('/demos/ui-avatar', 'Avatar', 'fa-user'),
      LayoutConsoleHelper.link('/demos/ui-brand', 'Brand', 'fa-cube'),
      LayoutConsoleHelper.link('/demos/ui-button', 'Button', 'fa-cube'),
      LayoutConsoleHelper.link('/demos/ui-card', 'Card', 'fa-cube'),
      LayoutConsoleHelper.link('/demos/ui-cart-icon', 'Cart Icon', 'fa-shopping-cart'),
      LayoutConsoleHelper.link('/demos/ui-code', 'Code', 'fa-code'),
      LayoutConsoleHelper.link('/demos/ui-comment', 'Comment', 'fa-comments'),
      LayoutConsoleHelper.link('/demos/ui-comment-form', 'Comment Form', 'fa-comment'),
      LayoutConsoleHelper.link('/demos/ui-form', 'Form', 'fa-pencil'),
      LayoutConsoleHelper.link('/demos/ui-hero', 'Hero', 'fa-cube'),
      LayoutConsoleHelper.link('/demos/ui-icon', 'Icon', 'fa-cube'),
      LayoutConsoleHelper.link('/demos/ui-list', 'List', 'fa-list'),
      LayoutConsoleHelper.link('/demos/ui-markdown', 'Markdown', 'fa-file-text'),
      LayoutConsoleHelper.link('/demos/ui-no-data', 'No Data', 'fa-warning'),
      LayoutConsoleHelper.link('/demos/ui-price', 'Price', 'fa-dollar'),
      LayoutConsoleHelper.link('/demos/ui-render', 'Render', 'fa-cube'),
      LayoutConsoleHelper.link('/demos/ui-sidebar', 'Sidebar', 'fa-cube'),
    ]),
    LayoutConsoleHelper.header('Layout', [
      //
      LayoutConsoleHelper.link('/demos/layout-console', 'Console', 'fa-cube'),
    ]),
    LayoutConsoleHelper.header('Libraries', [
      //
      LayoutConsoleHelper.link('/demos/lib-editorjs', 'Editor.js', 'fa-cube'),
    ]),
    LayoutConsoleHelper.header('Themes', [
      //
      LayoutConsoleHelper.link('/demos/themes-colors', 'Colors', 'fa-cube'),
      LayoutConsoleHelper.link('/demos/themes-gradients', 'Gradients', 'fa-cube'),
      // LayoutConsoleHelper.link('/demos/themes-switcher', 'Switcher', 'fa-cube'),
    ]),
  ]
  public user = {
    avatarUrl: 'https://avatars3.githubusercontent.com/u/36491?v=4',
  }
}
