import { DemoHelper } from '../../demo.helper';

import { MarkdownSimpleComponent } from './markdown-simple.component';

export const components = [MarkdownSimpleComponent];

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
  ],
};
