import { DemoHelper } from '../../demo.helper'

import { ListSimpleComponent } from './list-simple.component'

export const components = [ListSimpleComponent]

export const config = {
  title: 'ui-list demos',
  demos: [
    DemoHelper.config({
      title: 'List Demos',
      description: 'The <code>ui-list</code> component can be used to render an list in various ways.',
      component: ListSimpleComponent,
      path: 'demos/ui-list',
      files: ['list-simple.component.ts', 'list-simple.component.html'],
    }),
  ],
}
