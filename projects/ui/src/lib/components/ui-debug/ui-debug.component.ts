import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-debug',
  template: `
    <code *ngIf="label">{{ label }}</code>
    <pre>{{ json ? (data | json) : data }}</pre>
  `,
})
export class UiDebugComponent {
  @Input() data: any
  @Input() json = true
  @Input() label: string
}
