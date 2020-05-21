import { Component } from '@angular/core'

@Component({
  templateUrl: './timeago-simple.component.html',
})
export class TimeagoSimpleComponent {
  public examples = [
    { t: new Date() },
    { t: new Date('12/10/1987') },
    { t: new Date('12/10/2030') },
  ]
}
