import { Component } from '@angular/core';
import { FormHelper, UiService } from '@kikstart/ui';

@Component({
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {
  public fields = [
    FormHelper.email('email', { label: 'Enter your email', required: true }),
    FormHelper.password('password', { label: 'Enter your password', required: true }),
  ];

  constructor(private ui: UiService) {}

  handleAction({ payload }) {
    this.ui.toastSuccess(`We will log you in: ${JSON.stringify(payload)}`);
  }
}
