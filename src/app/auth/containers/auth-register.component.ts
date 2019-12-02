import { Component } from '@angular/core';
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
      [model]="model"
      [fields]="fields"
      [socialButtons]="true"
      label="Register"
      (action)="handleAction($event)"
    ></ui-auth>
  `,
})
export class AuthRegisterComponent {
  brand = AuthWebHelper.brand;
  footer = AuthWebHelper.footer;
  form = new FormGroup({});
  model = { username: 'admin', password: 'password', name: 'Admin', email: 'admin@admin' };
  fields = AuthWebHelper.registerFields;
  loading = false;
  links = [AuthWebHelper.loginLink, AuthWebHelper.registerLink];
  bottomLink = AuthWebHelper.forgotLink;

  constructor(public ui: UiService, public router: Router) {
    this.ui.setMetaData({ title: 'Register' });
  }

  async handleAction({ type, payload }) {
    this.loading = true;
    this.form.disable();

    setTimeout(() => {
      this.form.enable();
      this.ui.toastSuccess('You are logged in!');
      return this.router.navigate(['/']);
    }, 1000);
  }
}
