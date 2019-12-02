import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UiService } from '@kikstart/ui';

import { AuthWebHelper } from '../helpers/auth-web.helper';

@Component({
  template: `
    <ui-auth [footer]="footer" [brand]="brand" [links]="links" [navigation]="false"></ui-auth>
  `,
})
export class AuthTokenComponent implements OnInit {
  brand = AuthWebHelper.brand;
  footer = AuthWebHelper.footer;
  links = [AuthWebHelper.loadingLink];

  constructor(public ui: UiService, private router: Router) {
    this.ui.setMetaData({ title: 'Login' });
  }

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
