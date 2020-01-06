import { Component, OnInit } from '@angular/core';
import { UiService } from '@kikstart/ui';

import { DemoService } from '../services/demo.service';

@Component({
  template: `
    <div class="" *ngFor="let file of files">
      <ui-card class="mb-3">
        <ui-card-header [cardTitle]="file.name"></ui-card-header>
        <ui-card-body>
          <ui-code [code]="file.code" [numbers]="file?.numbers" [language]="file.language"></ui-code>
        </ui-card-body>
      </ui-card>
    </div>
  `,
})
export class DemoCodeComponent {
  files = [
    {
      language: 'html',
      name: 'ui-code-example.html',
      code: `<div class="my-5" *ngFor="let file of files">
  <ui-card class="mb-3">
    <ui-card-header [cardTitle]="file.name"></ui-card-header>
    <ui-code [code]="file.code" [numbers]="file?.numbers" [language]="file.language"></ui-code>
  </ui-card>
</div>
`,
    },
    {
      language: 'typescript',
      name: 'ui-tab.ts',
      code: `export interface UiTab {
  path: string;
  label: string;
  queryParams?: any;
}`,
    },
    {
      language: 'markdown',
      name: 'README.md',
      code: `# I am a readme
> This is a quote.`,
    },
    {
      language: 'graphql',
      name: 'login.graphql',
      code: `mutation Login($data: LoginInput!) {
  login(data: $data) {
    token
    user {
      username
    }
  }
}`,
    },
    {
      language: 'json',
      name: '.releaserc.json',
      code: `{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/npm"
  ]
}`,
    },
  ];
}
