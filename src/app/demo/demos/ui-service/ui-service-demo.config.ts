import { DemoHelper } from '../../demo.helper'

import { MetaDataDemoComponent } from './meta-data-demo.component'
import { ToastDemoComponent } from './toast-demo.component'

export const components = [MetaDataDemoComponent, ToastDemoComponent]

export const config = {
  title: 'UiService demos',
  demos: [
    DemoHelper.config({
      title: 'Toasts',
      description:
        'The <code>UiService</code> wraps around <a href="https://github.com/scttcper/ngx-toastr">ngx-toastr</a>',
      component: ToastDemoComponent,
      path: 'demos/ui-service',
      files: ['toast-demo.component.ts'],
    }),
    DemoHelper.config({
      title: 'Meta Data',
      description: `The <code>UiService</code> wraps around the Angular
        <code>Meta</code> and <code>Title</code> service to quickly set this meta data`,
      component: MetaDataDemoComponent,
      path: 'demos/ui-service',
      files: ['meta-data-demo.component.ts'],
    }),
  ],
}
