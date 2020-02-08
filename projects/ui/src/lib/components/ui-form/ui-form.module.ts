import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'

import {
  emailValidator,
  emailValidatorMessage,
  maxlengthValidationMessage,
  maxValidationMessage,
  minlengthValidationMessage,
  minValidationMessage,
} from './validators'
import { UiFormComponent } from './ui-form.component'

const config: ConfigOption = {
  types: [],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'minlength', message: minlengthValidationMessage },
    { name: 'maxlength', message: maxlengthValidationMessage },
    { name: 'min', message: minValidationMessage },
    { name: 'max', message: maxValidationMessage },
    { name: 'email', message: emailValidatorMessage },
  ],
  validators: [{ name: 'email', validation: emailValidator }],
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    FormlyBootstrapModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, UiFormComponent],
  declarations: [UiFormComponent],
})
export class UiFormModule {}
