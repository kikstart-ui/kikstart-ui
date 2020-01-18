import { Component } from '@angular/core'
import { config } from './app.config'

import { UiBrand } from '@kikstart/ui'

@Component({
  template: `
    <ui-hero [brand]="brand" title="404" description="Page not found."></ui-hero>
  `,
})
export class App404Component {
  brand: UiBrand = config.layout.brand
}
