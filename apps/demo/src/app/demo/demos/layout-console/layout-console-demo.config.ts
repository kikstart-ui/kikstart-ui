import { DemoHelper } from '../../demo.helper'

import { LayoutConsoleDemoComponent } from './layout-console-demo.component'

export const components = [LayoutConsoleDemoComponent]

export const config = {
  title: 'ui-render demos',
  demos: [
    DemoHelper.config({
      title: 'Render component',
      description: '',
      component: LayoutConsoleDemoComponent,
      path: 'demos/layout-console',
      files: ['layout-console-demo.component.html', 'layout-console-demo.component.ts'],
    }),
  ],
}
