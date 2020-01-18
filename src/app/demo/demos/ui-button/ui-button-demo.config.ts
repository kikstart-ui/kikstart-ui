import { DemoHelper } from '../../demo.helper'

import { ButtonSimpleComponent } from './button-simple.component'

export const components = [ButtonSimpleComponent]

export const config = {
  title: 'ui-button demos',
  demos: [
    DemoHelper.config({
      title: 'Button Demos',
      description: `The <code>ui-button</code> and <code>ui-buttons</code> components
        can be used to render an button or button group in various ways.`,
      component: ButtonSimpleComponent,
      path: 'demos/ui-button',
      files: ['button-simple.component.ts', 'button-simple.component.html'],
    }),
  ],
}
