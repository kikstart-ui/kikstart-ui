import { Component, OnInit } from '@angular/core';
import { FormHelper, UiService } from '@kikstart/ui';

import { DemoService } from '../../../services/demo.service';

@Component({
  templateUrl: './comment-custom.component.html',
})
export class CommentCustomComponent {
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
}
