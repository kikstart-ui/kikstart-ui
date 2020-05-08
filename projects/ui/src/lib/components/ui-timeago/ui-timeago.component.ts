import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-timeago',
  template: ` {{ value | timeago }} `,
})
export class UiTimeagoComponent {
  @Input() public t: string | number

  get value(): number {
    return new Date(this.t).getTime()
  }
}
