import { Component } from '@angular/core'
import { ButtonHelper, randInt, UiComment, UiService } from '@kikstart/ui'

@Component({
  templateUrl: './comment-feed.component.html',
})
export class CommentFeedComponent {
  public feed: UiComment[] = []

  public link = ['/demo/avatar']

  constructor(public ui: UiService) {
    this.createCommentFeed()
  }

  private createCommentFeed() {
    for (let i = 0; i < 10; i++) {
      const comment: UiComment = {
        id: i.toString(),
        text: 'This is a demo of the ui-comment component',
        created: new Date('Sat, 04 Jan 2020 00:41:30 GMT'),
        author: {
          name: 'kikstart.dev',
          avatar: 'assets/logo.png',
          username: '@KikstartDev',
        },
        buttons: [
          ButtonHelper.like({
            label: `${randInt(0, 15)} Likes`,
            payload: { id: i },
          }),
          ButtonHelper.comment({
            label: `${randInt(0, 15)} Comments`,
            payload: { id: i },
            path: '/demo/ui-comment',
            queryParams: { id: i.toString() },
          }),
        ],
      }
      this.feed.push(comment)
    }
  }

  handleAction({ type, payload }) {
    this.ui.toastSuccess(`${type}: ${payload.id}!`)
  }
}
