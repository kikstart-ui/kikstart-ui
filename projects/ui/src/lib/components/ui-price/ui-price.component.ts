import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-price',
  template: ` {{ price / 100 | currency: 'USD':'symbol-narrow':'1.2-2' }} `,
  styles: [],
})
export class UiPriceComponent {
  @Input() public price: number
}
