import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '@kikstart/ui';

import { AuthWebHelper } from '../helpers/auth-web.helper';

@Component({
  template: `
    <ui-auth [brand]="brand" [links]="links" [navigation]="false"></ui-auth>
  `,
})
export class AuthLogoutComponent implements OnInit {
  brand = AuthWebHelper.brand;
  footer = AuthWebHelper.footer;
  links = [AuthWebHelper.logoutLink];

  constructor(private ui: UiService, private router: Router) {
    this.ui.setMetaData({ title: 'Logout' });
  }

  ngOnInit() {
    setTimeout(() => {
      this.ui.toastSuccess('You are logged out!');
      this.links = [AuthWebHelper.signedOutLink];
      setTimeout(() => this.router.navigate(['/login']), 750);
    }, 1000);
  }
}
