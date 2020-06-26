import { Component, Input } from '@angular/core'
import { PullProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { UiIcon } from './ui-icon'
import { UiIconService } from './ui-icon.service'

@Component({
  selector: 'ui-icon',
  template: `
    <fa-icon
      [border]="border"
      [fixedWidth]="fw"
      [icon]="icon"
      [spin]="spin"
      [pulse]="pulse"
      [pull]="pull"
      [size]="size"
    >
    </fa-icon>
  `,
})
export class UiIconComponent {
  @Input() icon: UiIcon
  @Input() border = false
  @Input() fw = true
  @Input() spin = false
  @Input() pulse = false
  @Input() pull: PullProp
  @Input() size: SizeProp

  constructor(private readonly service: UiIconService) {}
}
