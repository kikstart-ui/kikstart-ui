import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UiService } from '@kikstart/ui';

import { AuthWebHelper } from '../helpers/auth-web.helper';
import { appLayout } from '../../app.config';

@Component({
  template: `
    <ui-auth
      [brand]="brand"
      [footer]="footer"
      [bottomLink]="bottomLink"
      [links]="links"
      [loading]="loading"
      [form]="form"
      [model]="model"
      [fields]="fields"
      [socialButtons]="true"
      label="Log in"
      (action)="handleAction($event)"
    ></ui-auth>
  `,
})
export class AuthLoginComponent {
  brand = { ...appLayout.brand, size: 'lg' };
  footer = appLayout.footer;
  form = new FormGroup({});
  model = { username: 'admin', password: 'password' };
  fields = AuthWebHelper.loginFields;
  loading = false;
  links = [AuthWebHelper.loginLink, AuthWebHelper.registerLink];
  bottomLink = AuthWebHelper.forgotLink;

  constructor(public ui: UiService, public router: Router) {}

  async handleAction({ type, payload }) {
    this.loading = true;
    this.form.disable();

    setTimeout(() => {
      this.ui.toastSuccess('You are logged in!');
      return this.router.navigate(['/']);
    }, 1000);
  }
}
