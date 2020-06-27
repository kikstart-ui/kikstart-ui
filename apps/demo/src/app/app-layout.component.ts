import { Component } from '@angular/core'
import { UiBrand } from '@kikstart-ui/ui-brand'
import { config } from './app.config'

@Component({
  template: `
    <web-layout>
      <header>
        <ui-navbar navbarStyle="dark" [brand]="brand" [links]="links"></ui-navbar>
      </header>
      <router-outlet></router-outlet>
    </web-layout>
  `,
})
export class AppLayoutComponent {
  brand: UiBrand = config.layout.brand
  links = [
    {
      label: 'Demos',
      path: '/demos',
    },
    {
      label: 'Layouts',
      path: '/layouts',
    },
  ]
}
