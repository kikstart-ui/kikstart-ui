import { DemoHelper } from '../../demo.helper'

import { MarkdownSimpleComponent } from './markdown-simple.component'
import { MarkdownEditorComponent } from './markdown-editor.component'

export const components = [MarkdownEditorComponent, MarkdownSimpleComponent]

export const config = {
  title: 'ui-markdown demos',
  demos: [
    DemoHelper.config({
      title: 'Render Markdown',
      description: 'The <code>ui-markdown</code> component can be used to render markdown code.',
      component: MarkdownSimpleComponent,
      path: 'demos/ui-markdown',
      files: ['markdown-simple.example.md', 'markdown-simple.component.ts'],
    }),
    DemoHelper.config({
      title: 'Markdown Editing',
      description: 'The <code>ui-markdown</code> renders whatever is in the textarea.',
      component: MarkdownEditorComponent,
      path: 'demos/ui-markdown',
      files: ['markdown-simple.example.md', 'markdown-editor.component.ts'],
    }),
  ],
}
