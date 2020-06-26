import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-code',
  template: `
    <ngx-numbered-codeblock
      [code]="code || data"
      [languague]="language"
      [lineNumbers]="numbers"
    ></ngx-numbered-codeblock>
  `,
})
export class UiCodeComponent {
  @Input() code = ''
  @Input() data = ''
  @Input() numbers = false
  @Input() language = 'json'
}
