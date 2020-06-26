import { Component } from '@angular/core'
import { UiBrand } from '@kikstart-ui/ui-brand'

@Component({
  templateUrl: './brand-simple.component.html',
})
export class BrandSimpleComponent {
  public brand: UiBrand = {
    name: 'kikstart',
    separator: '|',
    product: 'ui',
    color: '#e83e8c',
    logo: 'assets/logo.png',
  }
  public examples = [
    { name: 'Small (default)', size: 'sm' },
    { name: 'Large', size: 'lg' },
  ]
}
