import { DemoHelper } from '../../demo.helper'

import { LibEditorjsDemoComponent } from './lib-editorjs-demo.component'

export const components = [LibEditorjsDemoComponent]

export const config = {
  title: 'ui-render demos',
  demos: [
    DemoHelper.config({
      title: 'Editor.js',
      description: '',
      component: LibEditorjsDemoComponent,
      path: 'demos/lib-editorjs',
      files: ['lib-editorjs-demo.component.html', 'lib-editorjs-demo.component.ts'],
    }),
  ],
}
