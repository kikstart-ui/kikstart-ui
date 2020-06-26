import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  template: `
    <button class="btn btn-{{ buttonClass }}" (click)="action.emit({ type: 'click' })">
      {{ label }}
    </button>
  `,
})
export class RenderDemoComponent {
  @Input() label = 'Default Click Text'
  @Input() buttonClass = 'info'
  @Output() action = new EventEmitter()
}
