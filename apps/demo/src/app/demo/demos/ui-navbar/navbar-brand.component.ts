import { Component } from '@angular/core'
import { UiBrand } from '@kikstart-ui/ui-brand'

@Component({
  templateUrl: './navbar-brand.component.html',
})
export class NavbarBrandComponent {
  public brand: UiBrand = { name: 'Kikstart', separator: '|', product: 'UI', logo: '/assets/logo.svg' }
}
