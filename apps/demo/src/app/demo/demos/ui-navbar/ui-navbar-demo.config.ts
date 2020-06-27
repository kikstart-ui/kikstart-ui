import { DemoHelper } from '../../demo.helper'

import { NavbarBrandComponent } from './navbar-brand.component'
import { NavbarSimpleComponent } from './navbar-simple.component'
import { NavbarStyleComponent } from './navbar-style.component'

export const components = [NavbarBrandComponent, NavbarSimpleComponent, NavbarStyleComponent]

export const config = {
  title: 'ui-navbar demos',
  demos: [
    DemoHelper.config({
      title: 'Navbar Demos',
      description: 'The <code>ui-navbar</code> component can be used to render an navbar in various ways.',
      component: NavbarSimpleComponent,
      path: 'demos/ui-navbar',
      files: ['navbar-simple.component.ts', 'navbar-simple.component.html'],
    }),
    DemoHelper.config({
      title: 'Navbar Brand',
      description: 'The <code>ui-navbar</code> component can be combined with <code>ui-brand</code>',
      component: NavbarBrandComponent,
      path: 'demos/ui-navbar',
      files: ['navbar-brand.component.ts', 'navbar-brand.component.html'],
    }),
    // DemoHelper.config({
    //   title: 'Navbar Avatar',
    //   description: 'The <code>ui-navbar</code> component can be combined with <code>ui-brand</code>',
    //   component: NavbarAvatarComponent,
    //   path: 'demos/ui-navbar',
    //   files: ['navbar-profile.component.ts', 'navbar-profile.component.html'],
    // }),
    DemoHelper.config({
      title: 'Navbar Styles',
      description: 'The <code>ui-navbar</code> component can be used to render an navbar in various ways.',
      component: NavbarStyleComponent,
      path: 'demos/ui-navbar',
      files: ['navbar-style.component.ts', 'navbar-style.component.html'],
    }),
  ],
}
