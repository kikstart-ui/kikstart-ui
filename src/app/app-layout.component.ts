import { Component } from '@angular/core';
import { UiService } from '@kikstart/ui';

@Component({
  selector: 'app-root',
  template: `
    <ui-layout [config]="ui.layout">
      <router-outlet></router-outlet>
    </ui-layout>
  `,
})
export class AppLayoutComponent {
  constructor(public ui: UiService) {}
}
