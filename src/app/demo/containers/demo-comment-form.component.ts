import { Component, OnInit } from '@angular/core';
import { UiService } from '@kikstart/ui';

import { DemoService } from '../services/demo.service';

@Component({
  template: `
    <ui-card class="mb-3">
      <ui-card-header>Simple Comment Form</ui-card-header>
      <ui-card-body>
        <ui-comment-form (action)="handleAction($event)" [avatar]="avatar"> </ui-comment-form>
      </ui-card-body>
    </ui-card>
  `,
})
export class DemoCommentFormComponent implements OnInit {
  public avatar = 'assets/logo.png';

  constructor(public service: DemoService, public ui: UiService) {}

  ngOnInit() {
    this.ui.setMetaData({ title: 'Comment Form - Demo' });
  }

  handleAction({ payload }) {
    console.log({ payload });
  }
}
