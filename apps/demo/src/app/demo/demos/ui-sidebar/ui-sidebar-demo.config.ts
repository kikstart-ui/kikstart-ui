import { DemoHelper } from '../../demo.helper'

import { SidebarSimpleComponent } from './sidebar-simple.component'

export const components = [SidebarSimpleComponent]

export const config = {
  title: 'ui-sidebar demos',
  demos: [
    DemoHelper.config({
      title: 'Sidebar Demos',
      description: 'The <code>ui-sidebar</code> component can be used to render an sidebar in various ways.',
      component: SidebarSimpleComponent,
      path: 'demos/ui-sidebar',
      files: ['sidebar-simple.component.ts', 'sidebar-simple.component.html'],
    }),
  ],
}
