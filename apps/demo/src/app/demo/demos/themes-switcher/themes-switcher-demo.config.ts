import { DemoHelper } from '../../demo.helper'

import { ThemesSwitcherDemoComponent } from './themes-switcher-demo.component'

export const components = [ThemesSwitcherDemoComponent]

export const config = {
  title: 'Colors',
  demos: [
    DemoHelper.config({
      title: 'Theme Switcher',
      description: `The \`@kikstart-ui/themes\` package includes a theme switcher component
`,
      component: ThemesSwitcherDemoComponent,
      path: 'demos/themes-switcher',
      files: ['themes-switcher-demo.component.html', 'themes-switcher-demo.component.ts'],
    }),
  ],
}
