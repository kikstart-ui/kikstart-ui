import { DemoHelper } from '../../demo.helper'

import { ThemesColorsDemoComponent } from './themes-colors-demo.component'

export const components = [ThemesColorsDemoComponent]

export const config = {
  title: 'Colors',
  demos: [
    DemoHelper.config({
      title: 'Colors',
      description: `The \`@kikstart-ui/themes\` package includes the Material colors defined in [@material/theme](https://npm.im/@material/theme)

For each color a <code>bg-</code>, <code>border-</code> and  <code>text-</code> class is created. Additionally, there is a CSS variable for al of the colors.

To use the colors you need to include the separate scss or css file:
\`\`\`css
@import '~@kikstart-ui/themes/scss/dark';
@import '~@kikstart-ui/themes/scss/colors';
\`\`\`

\`\`\`css
@import '~@kikstart-ui/themes/css/dark';
@import '~@kikstart-ui/themes/css/colors';
\`\`\`
`,
      component: ThemesColorsDemoComponent,
      path: 'demos/themes-colors',
      files: ['themes-colors-demo.component.html', 'themes-colors-demo.component.ts'],
    }),
  ],
}
