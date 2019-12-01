import { Component } from '@angular/core';
import { appLayout } from './app.config';

@Component({
  selector: 'app-root',
  template: `
    <ui-layout [config]="config">
      <router-outlet></router-outlet>
    </ui-layout>
  `,
})
export class AppLayoutComponent {
  config = appLayout;
}
