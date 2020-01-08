import { Component } from '@angular/core'

@Component({
  templateUrl: './comment-form-simple.component.html',
})
export class CommentFormSimpleComponent {
  public avatar = 'assets/logo.png'

  handleAction({ payload }) {
    console.log({ payload })
  }
}
