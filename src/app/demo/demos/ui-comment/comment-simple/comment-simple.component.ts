import { Component } from '@angular/core';

@Component({
  templateUrl: './comment-simple.component.html',
})
export class CommentSimpleComponent {
  public avatar = 'assets/logo.png';
  public name = 'kikstart.dev';
  public username = '@KikstartDev';
  public time = new Date('Sat, 04 Jan 2020 00:41:30 GMT');
  public text = 'This is a demo of the ui-comment component';
}
