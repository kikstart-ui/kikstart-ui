import { DemoHelper } from '../../demo.helper'

import { CartIconSimpleComponent } from './cart-icon-simple.component'

export const components = [CartIconSimpleComponent]

export const config = {
  title: 'ui-cart-icon demos',
  demos: [
    DemoHelper.config({
      title: 'cart-icon',
      description: 'The <code>ui-cart-icon</code> component can be used to render a shopping-cart.',
      component: CartIconSimpleComponent,
      path: 'demos/ui-cart-icon',
      files: ['cart-icon-simple.component.ts', 'cart-icon-simple.component.html'],
    }),
  ],
}
