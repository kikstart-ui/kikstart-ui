import { DemoHelper } from '../../demo.helper'

import { AvatarSimpleComponent } from './avatar-simple.component'

export const components = [AvatarSimpleComponent]

export const config = {
  title: 'ui-avatar demos',
  demos: [
    DemoHelper.config({
      title: 'Avatar sizes',
      description: 'The <code>ui-avatar</code> component can be used to render an avatar in various sizes.',
      component: AvatarSimpleComponent,
      path: 'demos/ui-avatar',
      files: ['avatar-simple.component.ts', 'avatar-simple.component.html'],
    }),
  ],
}
