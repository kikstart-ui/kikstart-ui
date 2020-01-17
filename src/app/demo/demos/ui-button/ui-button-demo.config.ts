import { DemoHelper } from '../../demo.helper'

import { ButtonSimpleComponent } from './button-simple.component'

export const components = [ButtonSimpleComponent]

export const config = {
  title: 'ui-button demos',
  demos: [
    DemoHelper.config({
      title: 'Button Demos',
      description:
        'The <code>ui-button</code> component can be used to render an button in various ways.',
      component: ButtonSimpleComponent,
      path: 'demos/ui-button',
      files: ['button-simple.component.ts', 'button-simple.component.html'],
    }),
  ],
}
