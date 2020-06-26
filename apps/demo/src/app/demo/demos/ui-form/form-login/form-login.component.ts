import { Component } from '@angular/core'
import { FormHelper } from '@kikstart-ui/ui-form'

@Component({
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {
  public fields = [
    FormHelper.email('email', { label: 'Enter your email', required: true }),
    FormHelper.password('password', { label: 'Enter your password', required: true }),
  ]

  handleAction({ payload }) {
    console.log(`We will log you in: ${JSON.stringify(payload)}`)
  }
}
