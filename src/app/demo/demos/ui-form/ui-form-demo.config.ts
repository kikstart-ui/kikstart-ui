import { DemoHelper } from '../../demo.helper'

import { FormSimpleComponent } from './form-simple/form-simple.component'
import { FormLoginComponent } from './form-login/form-login.component'

export const components = [FormLoginComponent, FormSimpleComponent]

const base = 'demos/ui-form'

export const config = {
  title: 'ui-form demos',
  demos: [
    DemoHelper.config({
      title: 'Simple Form',
      description: `The <code>ui-form</code> component can be used to render a form. It's powered by
<a href="https://github.com/ngx-formly/ngx-formly">ngx-formly</a> providing a convenient abstraction with some helpers
and defaults.
`,
      component: FormSimpleComponent,
      path: `${base}/form-simple`,
      files: ['form-simple.component.ts', 'form-simple.component.html'],
    }),
    DemoHelper.config({
      title: 'Login Form',
      description: `This is an example of a simple login form. The fields have validation and should work as expected with minimal config.`,
      component: FormLoginComponent,
      path: `${base}/form-login`,
      files: ['form-login.component.ts', 'form-login.component.html'],
    }),
  ],
}
