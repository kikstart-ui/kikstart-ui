import { DemoHelper } from '../../demo.helper'

import { TimeagoSimpleComponent } from './timeago-simple.component'

export const components = [TimeagoSimpleComponent]

export const config = {
  title: 'ui-timeago demos',
  demos: [
    DemoHelper.config({
      title: 'timeago demo',
      description:
        'The <code>ui-timeago</code> component can be used to render the timeago in different format.',
      component: TimeagoSimpleComponent,
      path: 'demos/ui-timeago',
      files: ['timeago-simple.component.ts', 'timeago-simple.component.html'],
    }),
  ],
}
