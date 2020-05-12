import { Component } from '@angular/core'

@Component({
  templateUrl: './cart-icon-simple.component.html',
})
export class CartIconSimpleComponent {
  public examples = [
    { name: 'Small', count: 0 },
    { name: 'Small', count: 1 },
    { name: 'Small', count: 10 },
    { name: 'Small', count: 99 },
  ]
}
