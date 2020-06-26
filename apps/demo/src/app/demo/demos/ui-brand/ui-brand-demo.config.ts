import { DemoHelper } from '../../demo.helper'

import { BrandSimpleComponent } from './brand-simple.component'

export const components = [BrandSimpleComponent]

export const config = {
  title: 'ui-brand demos',
  demos: [
    DemoHelper.config({
      title: 'Simple Example',
      description: `The <code>ui-brand</code> component can be used to render a consistent branding throughout your app`,
      component: BrandSimpleComponent,
      path: 'demos/ui-brand',
      files: ['brand-simple.component.ts', 'brand-simple.component.html'],
    }),
  ],
}
