import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UiService } from '@kikstart/ui';

import { AuthWebHelper } from '../helpers/auth-web.helper';

@Component({
  template: `
    <ui-auth
      [brand]="brand"
      [footer]="footer"
      [bottomLink]="bottomLink"
      [links]="links"
      [loading]="loading"
      [form]="form"
      [fields]="fields"
      label="Reset password"
      (action)="handleAction($event)"
    ></ui-auth>
  `,
})
export class AuthResetComponent implements OnInit {
  brand = AuthWebHelper.brand;
  footer = AuthWebHelper.footer;
  form = new FormGroup({});
  fields = [AuthWebHelper.emailField];
  loading = false;
  links = [AuthWebHelper.forgotLink, AuthWebHelper.registerLink];
  bottomLink = AuthWebHelper.loginLink;

  constructor(public ui: UiService, private router: Router) {
    this.ui.setMetaData({ title: 'Reset password' });
  }

  ngOnInit() {}

  async handleAction({ payload }) {
    this.form.disable();
    this.loading = true;
    setTimeout(() => {
      this.ui.toastSuccess('Check you email please!');
      return this.router.navigate(['/']);
    }, 1000);
  }
}
