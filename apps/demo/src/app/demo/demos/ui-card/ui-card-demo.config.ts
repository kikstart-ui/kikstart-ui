import { DemoHelper } from '../../demo.helper'

import { CardSimpleComponent } from './card-simple.component'

export const components = [CardSimpleComponent]

export const config = {
  title: 'ui-card demos',
  demos: [
    DemoHelper.config({
      title: 'Card Demos',
      description: 'The <code>ui-card</code> component can be used to render an card in various ways.',
      component: CardSimpleComponent,
      path: 'demos/ui-card',
      files: ['card-simple.component.ts', 'card-simple.component.html'],
    }),
  ],
}
