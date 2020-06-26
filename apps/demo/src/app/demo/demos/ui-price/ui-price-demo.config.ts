import { DemoHelper } from '../../demo.helper'

import { PriceSimpleComponent } from './price-simple.component'

export const components = [PriceSimpleComponent]

export const config = {
  title: 'ui-price demos',
  demos: [
    DemoHelper.config({
      title: 'price',
      description:
        'The <code>ui-price</code> component can be used to render a price. The price takes a value in cents.',
      component: PriceSimpleComponent,
      path: 'demos/ui-price',
      files: ['price-simple.component.ts', 'price-simple.component.html'],
    }),
  ],
}
