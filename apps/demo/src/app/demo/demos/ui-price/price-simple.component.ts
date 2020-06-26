import { Component } from '@angular/core'

@Component({
  templateUrl: './price-simple.component.html',
})
export class PriceSimpleComponent {
  public examples = [{ price: 0 }, { price: 5200 }, { price: 7800 }, { price: 9999999 }]
}
