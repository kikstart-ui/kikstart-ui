import { Component } from '@angular/core'

@Component({
  templateUrl: './comment-simple.component.html',
})
export class CommentSimpleComponent {
  public comment = {
    id: '1',
    text: 'This is a demo of the ui-comment component',
    created: new Date('Sat, 04 Jan 2020 00:41:30 GMT'),
    author: {
      avatarUrl: 'assets/logo.png',
      name: 'kikstart.dev',
      username: '@KikstartDev',
    },
  }
}
