import { Component } from '@angular/core'
import { FormHelper } from '@kikstart-ui/ui-form'

@Component({
  templateUrl: './form-simple.component.html',
})
export class FormSimpleComponent {
  public fields = [FormHelper.input('name', { label: 'Enter your name' })]

  handleAction({ payload }) {
    console.log({ payload })
  }
}
