import { CodeSimpleComponent } from './code-simple.component';
import { DemoHelper } from '../../demo.helper';

export const components = [CodeSimpleComponent];
export const config = {
  title: 'ui-code demos',
  demos: [
    DemoHelper.config({
      title: 'Simple Comment',
      description: 'The <code>ui-code</code> component can be used to render out a code snippet.',
      component: CodeSimpleComponent,
      path: 'demos/ui-code',
      files: ['code-simple.component.ts', 'code-simple.component.html'],
    }),
  ],
};
