import { Component, OnInit } from '@angular/core';
import { UiService } from '@kikstart/ui';

import { DemoService } from '../services/demo.service';

@Component({
  template: `
    <ui-card class="mb-3">
      <ui-card-header>Example Avatar Sm</ui-card-header>
      <ui-card-body>
        <pre><code>{{ exampleAvatarSm }}</code></pre>
        <ui-avatar [avatar]="avatar" size="sm"></ui-avatar>
      </ui-card-body>
    </ui-card>

    <ui-card class="mb-3">
      <ui-card-header>Example Avatar Sd</ui-card-header>
      <ui-card-body>
        <pre><code>{{ exampleAvatarSd }}</code></pre>
        <ui-avatar [avatar]="avatar" size="md"></ui-avatar>
      </ui-card-body>
    </ui-card>

    <ui-card class="mb-3">
      <ui-card-header>Example Avatar Sg</ui-card-header>
      <ui-card-body>
        <pre><code>{{ exampleAvatarSg }}</code></pre>
        <ui-avatar [avatar]="avatar" size="lg"></ui-avatar>
      </ui-card-body>
    </ui-card>
  `,
})
export class DemoAvatarComponent implements OnInit {
  public avatar = 'assets/logo.png';

  public exampleAvatarSm = `<ui-avatar [avatar]="avatar" size="sm"></ui-avatar>`;
  public exampleAvatarSd = `<ui-avatar [avatar]="avatar" size="md"></ui-avatar>`;
  public exampleAvatarSg = `<ui-avatar [avatar]="avatar" size="lg"></ui-avatar>`;

  constructor(public service: DemoService, public ui: UiService) {}

  ngOnInit() {
    this.ui.setMetaData({ title: 'Avatar - Demo' });
  }
}
