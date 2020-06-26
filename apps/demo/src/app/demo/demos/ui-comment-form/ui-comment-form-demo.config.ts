import { DemoHelper } from '../../demo.helper'

import { CommentFormLoadingComponent } from './comment-form-loading/comment-form-loading.component'
import { CommentFormSimpleComponent } from './comment-form-simple/comment-form-simple.component'

export const components = [CommentFormLoadingComponent, CommentFormSimpleComponent]

const base = 'demos/ui-comment-form'

export const config = {
  title: 'ui-comment-form demos',
  demos: [
    DemoHelper.config({
      title: 'Simple Comment Form',
      description: 'The <code>ui-comment-form</code> component can be used to render an comment form.',
      component: CommentFormSimpleComponent,
      path: `${base}/comment-form-simple`,
      files: ['comment-form-simple.component.ts', 'comment-form-simple.component.html'],
    }),
    DemoHelper.config({
      title: 'Comment Form with Loading indicator',
      description:
        'The <code>ui-comment-form</code> has a loading indicator that comes in handy for asynchronous operations',
      component: CommentFormLoadingComponent,
      path: `${base}/comment-form-loading`,
      files: ['comment-form-loading.component.ts', 'comment-form-loading.component.html'],
    }),
  ],
}
