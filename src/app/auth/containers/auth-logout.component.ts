import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '@kikstart/ui';

import { AuthWebHelper } from '../helpers/auth-web.helper';
import { appLayout } from '../../app.config';

@Component({
  template: `
    <ui-auth [brand]="brand" [links]="links" [navigation]="false"></ui-auth>
  `,
})
export class AuthLogoutComponent implements OnInit {
  brand = { ...appLayout.brand, size: 'lg' };
  footer = appLayout.footer;
  links = [AuthWebHelper.logoutLink];

  constructor(private ui: UiService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.ui.toastSuccess('You are logged out!');
      this.links = [AuthWebHelper.signedOutLink];
      setTimeout(() => this.router.navigate(['/login']), 750);
    }, 1000);
  }
}
