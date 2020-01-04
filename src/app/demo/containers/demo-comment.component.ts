import { Component, OnInit } from '@angular/core';
import { FormHelper, UiService } from '@kikstart/ui';

import { DemoService } from '../services/demo.service';

@Component({
  template: `
    <ui-card class="mb-3">
      <ui-card-header>Simple Comment</ui-card-header>
      <ui-card-body>
        <ui-comment [avatar]="avatar" [name]="name" [username]="username" [time]="time" [text]="text"> </ui-comment>
      </ui-card-body>
    </ui-card>
    <ui-card class="mb-3">
      <ui-card-header>Try the Comment component</ui-card-header>
      <ui-card-body>
        <ui-comment
          [avatar]="model.avatar"
          [name]="model.name"
          [link]="model.link"
          [username]="model.username"
          [time]="model.time"
          [text]="model.text"
        >
        </ui-comment>
        <ui-form [model]="model" [fields]="fields" [submitButton]="false"></ui-form>
      </ui-card-body>
    </ui-card>
    <ui-card class="mb-3">
      <ui-card-header>Comment with link</ui-card-header>
      <ui-card-body>
        <ui-comment [avatar]="avatar" [link]="link" [name]="name" [username]="username" [time]="time" [text]="text">
        </ui-comment>
      </ui-card-body>
    </ui-card>
    <ui-card class="mb-3">
      <ui-card-header>Comment with Buttons</ui-card-header>
      <ui-card-body>
        <ui-comment
          (action)="handleAction($event)"
          (delete)="deleteComment($event)"
          [deleteButton]="true"
          [avatar]="avatar"
          [name]="name"
          [username]="username"
          [time]="time"
          [text]="text"
          [buttons]="buttons"
        >
        </ui-comment>
      </ui-card-body>
    </ui-card>
    <ui-card class="mb-3">
      <ui-card-header>Comment Feed</ui-card-header>
      <ui-card-body>
        <ng-container *ngFor="let i of items; let idx = index">
          <ui-comment
            class="mb-2"
            (action)="handleAction($event)"
            (delete)="deleteComment(idx)"
            [deleteButton]="true"
            [buttons]="buttons"
            [avatar]="avatar"
            [name]="name"
            [link]="link"
            [username]="username"
            [time]="time"
            [text]="text"
          >
          </ui-comment>
        </ng-container>
      </ui-card-body>
    </ui-card>
  `,
})
export class DemoCommentComponent implements OnInit {
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

  public model = {
    avatar: 'https://github.com/beeman.png',
    link: '/demo/comment',
    name: 'beeman 🐝',
    username: '@beeman',
    time: new Date('Sat, 04 Jan 2020 00:41:30 GMT'),
    text: 'Hi there, I am beeman and I love coding! ',
  };

  public fields = [
    FormHelper.input('name', { label: 'name', required: true }),
    FormHelper.input('username', { label: 'username', required: true }),
    FormHelper.input('avatar', { label: 'avatar', required: true }),
    FormHelper.input('link', { label: 'link', required: true }),
    FormHelper.input('time', { label: 'time', required: true }),
    FormHelper.input('text', { label: 'text', required: true }),
  ];

  constructor(public service: DemoService, public ui: UiService) {}

  ngOnInit() {
    this.ui.setMetaData({ title: 'Comment - Demo' });
  }

  handleAction($event) {
    console.log($event);
  }

  deleteComment($event) {
    console.log('deleteComment', $event);
  }

  updateComment($event: any) {
    console.log($event);
  }
}
