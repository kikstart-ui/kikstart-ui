import { DemoHelper } from '../../demo.helper'

import { CommentSimpleComponent } from './comment-simple/comment-simple.component'
import { CommentFeedComponent } from './comment-feed/comment-feed.component'
import { CommentCustomComponent } from './comment-custom/comment-custom.component'

const path = 'demos/ui-comment'

export const components = [CommentSimpleComponent, CommentFeedComponent, CommentCustomComponent]
export const config = {
  title: 'ui-comment demos',
  demos: [
    DemoHelper.config({
      title: 'Simple Comment',
      description:
        'The <code>ui-comment</code> component can be used to render out a comment or simple social media post.',
      component: CommentSimpleComponent,
      path: `${path}/comment-simple`,
      files: ['comment-simple.component.ts', 'comment-simple.component.html'],
    }),
    DemoHelper.config({
      title: 'Custom Comment',
      description: 'Play around with the <code>ui-comment</code> using this form rendered by <code>ui-form</code>.',
      component: CommentCustomComponent,
      path: `${path}/comment-custom`,
      files: ['comment-custom.component.ts', 'comment-custom.component.html'],
    }),
    DemoHelper.config({
      title: 'Comment Feed',
      description: 'The <code>ui-comment</code> component can be used in a feed or timeline.',
      component: CommentFeedComponent,
      path: `${path}/comment-feed`,
      files: ['comment-feed.component.ts', 'comment-feed.component.html'],
    }),
  ],
}
