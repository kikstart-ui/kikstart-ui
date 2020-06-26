import { Component } from '@angular/core'
import { UiBrand } from '@kikstart-ui/ui-brand'
import { config } from '../../app.config'

@Component({
  template: `
    <console-page>
      <ui-hero [brand]="brand" title="404" description="Page not found."></ui-hero>
    </console-page>
  `,
})
export class AppNotFoundComponent {
  brand: UiBrand = config.layout.brand
}
