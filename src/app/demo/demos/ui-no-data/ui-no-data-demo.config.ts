import { DemoHelper } from '../../demo.helper'

import { NoDataSimpleComponent } from './no-data-simple.component'

export const components = [NoDataSimpleComponent]

export const config = {
  title: 'ui-no-data demos',
  demos: [
    DemoHelper.config({
      title: 'Simple Example',
      description: `The <code>ui-no-data</code> component can be used to render an empty state with optional call to action.`,
      component: NoDataSimpleComponent,
      path: 'demos/ui-no-data',
      files: ['no-data-simple.component.ts', 'no-data-simple.component.html'],
    }),
  ],
}
