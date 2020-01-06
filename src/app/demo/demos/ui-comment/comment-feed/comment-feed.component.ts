import { Component } from '@angular/core';
import { UiService } from '@kikstart/ui';

@Component({
  templateUrl: './comment-feed.component.html',
})
export class CommentFeedComponent {
  public avatar = 'assets/logo.png';
  public link = ['/demo/avatar'];
  public name = 'kikstart.dev';
  public username = '@KikstartDev';
  public time = new Date('Sat, 04 Jan 2020 00:41:30 GMT');
  public text = 'This is a demo of the ui-comment component';
  public buttons = [
    {
      label: 'Like',
      icon: 'fa fa-fw fa-heart',
      action: 'LIKE',
      payload: { id: 'some-id' },
    },
    {
      label: 'Comment',
      icon: 'fa fa-fw fa-comment',
      action: 'COMMENT',
      payload: { id: 'some-id' },
    },
  ];
  public items = new Array(10).fill(1);

  constructor(public ui: UiService) {}

  handleAction({ type }) {
    this.ui.toastSuccess(`You clicked the ${type} button!`);
  }

  deleteComment($event) {
    this.ui.toastSuccess(`Deleting comment!`);
  }
}
