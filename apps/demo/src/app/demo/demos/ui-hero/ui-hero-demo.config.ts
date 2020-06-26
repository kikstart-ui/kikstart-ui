import { DemoHelper } from '../../demo.helper'

import { HeroCompleteComponent } from './hero-complete.component'
import { HeroSimpleComponent } from './hero-simple.component'
import { HeroUserComponent } from './hero-user.component'

export const components = [HeroCompleteComponent, HeroSimpleComponent, HeroUserComponent]

export const config = {
  title: 'ui-hero demos',
  demos: [
    DemoHelper.config({
      title: 'Simple Example',
      description: `The <code>ui-hero</code> component can be used to render a hero unit using Bootstrap\'s Jumbotron.`,
      component: HeroSimpleComponent,
      path: 'demos/ui-hero',
      files: ['hero-simple.component.ts', 'hero-simple.component.html'],
    }),
    DemoHelper.config({
      title: 'User Example',
      description: `The <code>ui-hero</code> component can be used to show a user as a hero!`,
      component: HeroUserComponent,
      path: 'demos/ui-hero',
      files: ['hero-user.component.ts', 'hero-user.component.html'],
    }),
    DemoHelper.config({
      title: 'Complete Example',
      description: `An example of <code>ui-hero</code> with all it's options: a <code>ui-brand</code> and <code>ui-card</code>'s`,
      component: HeroCompleteComponent,
      path: 'demos/ui-hero',
      files: ['hero-complete.component.ts', 'hero-complete.component.html'],
    }),
  ],
}
