import { DemoHelper } from '../../demo.helper'

import { IconListComponent } from './icon-list.component'
import { IconSimpleComponent } from './icon-simple.component'

export const components = [IconListComponent, IconSimpleComponent]

export const config = {
  title: 'ui-icon demos',
  demos: [
    DemoHelper.config({
      title: 'Icon Demos',
      description: 'The <code>ui-icon</code> component can be used to render an icon in various ways.',
      component: IconSimpleComponent,
      path: 'demos/ui-icon',
      files: ['icon-simple.component.ts', 'icon-simple.component.html'],
    }),
    DemoHelper.config({
      title: 'Icon List',
      description: 'The list of default icons that are shipped with Kikstart UI',
      component: IconListComponent,
      path: 'demos/ui-icon',
      files: ['icon-list.component.ts'],
    }),
  ],
}
