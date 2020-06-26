import { Component } from '@angular/core'
import { ConsoleThumb, LayoutConsoleHelper } from '@kikstart-ui/layout-console'

@Component({
  template: `
    <console-page>
      <ui-hero
        class="grd-kikstart-2 mb-3 mb-md-5"
        [centered]="false"
        [title]="title"
        [description]="description"
      ></ui-hero>
      <console-thumbs [thumbs]="thumbs"></console-thumbs>
    </console-page>
  `,
})
export class DemoLayoutIndexComponent {
  title = 'Layouts'
  description = 'Some pre-defined commonly used layouts that should give you a great head-start.'
  thumbs: ConsoleThumb[] = [
    LayoutConsoleHelper.thumb('Console', {
      route: 'console',
      description: "Layout for building admin UI's. Inspired by the Firebase console",
    }),
    LayoutConsoleHelper.thumb('Docs', {
      route: 'docs',
      description: 'Layout for documentation websites. Focuses on content and structure.',
    }),
    LayoutConsoleHelper.thumb('Web', { route: 'web', description: 'Layout for building general purpose websites' }),
  ]
}
