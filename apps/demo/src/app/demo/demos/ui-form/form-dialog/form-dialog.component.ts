import { Component } from '@angular/core'
import { UiButton } from '@kikstart-ui/ui-button'
import { FormHelper, UiFormService } from '@kikstart-ui/ui-form'
import { of } from 'rxjs'

@Component({
  template: `<ui-button [button]="button"></ui-button>`,
})
export class FormDialogComponent {
  public button: UiButton = { label: 'Open Form Dialog', handler: () => this.openForm() }

  constructor(
    // Inject the UiFormService
    private readonly uiForm: UiFormService,
  ) {}

  openForm() {
    // Call the open method on the UiFormService
    this.uiForm.open({
      fields: [
        // Define the fields
        FormHelper.input('name', { label: 'Enter your name', required: true }),
      ],
      model: {
        // Pass in initial data
      },
      handler: (data) => {
        // The submit handler
        console.log('This is the form data', data)
        // Returning true will dismiss the form, returning false will keep it open.
        return of(true)
      },
    })
  }
}
