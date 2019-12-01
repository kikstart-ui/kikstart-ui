import { Component, OnInit } from '@angular/core';
import { AuthWebHelper } from '../helpers/auth-web.helper';
import { appLayout } from '../../app.config';
import { UiService } from '@kikstart/ui';
import { Router } from '@angular/router';

@Component({
  template: `
    <ui-auth [footer]="footer" [brand]="brand" [links]="links" [navigation]="false"></ui-auth>
  `,
})
export class AuthTokenComponent implements OnInit {
  brand = { ...appLayout.brand, size: 'lg' };
  footer = appLayout.footer;
  links = [AuthWebHelper.loadingLink];

  constructor(public ui: UiService, private router: Router) {}

  ngOnInit() {
    this.handleAction({ payload: true });
  }

  async handleAction({ payload }) {
    setTimeout(() => {
      this.ui.toastSuccess('You are now logged in!');
      return this.router.navigate(['/']);
    }, 1000);
  }
}
