import { DemoHelper } from '../../demo.helper'

import { RenderSimpleComponent } from './render-simple.component'

export const components = [RenderSimpleComponent]

export const config = {
  title: 'ui-render demos',
  demos: [
    DemoHelper.config({
      title: 'Render component',
      description:
        'The <code>ui-render</code> component can be used to dynamically render components and wire up their inputs and outputs.',
      component: RenderSimpleComponent,
      path: 'demos/ui-render',
      files: ['render-demo.component.ts', 'render-simple.component.ts'],
    }),
  ],
}
