import { DemoHelper } from '../../demo.helper'

import { CustomGradientsDemoComponent } from './custom-gradients-demo.component'

export const components = [CustomGradientsDemoComponent]

export const config = {
  title: 'Gradients',
  demos: [
    DemoHelper.config({
      title: 'Custom Gradients',
      description:
        'Custom gradients can be created by including the [colors](/demos/themes-colors) and using their CSS variables.',
      component: CustomGradientsDemoComponent,
      path: 'demos/themes-gradients',
      files: ['custom-gradients-demo.component.html', 'custom-gradients-demo.component.ts'],
    }),
  ],
}
