import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-markdown',
  template: ` <markdown [data]="data"></markdown> `,
})
export class UiMarkdownComponent {
  @Input() public data: string
}
