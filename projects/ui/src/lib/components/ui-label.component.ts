import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-label',
  template: `
    <i *ngIf="icon" [class]="iconLeft"></i>{{ label }}<i *ngIf="iconAfter" [class]="iconRight"></i>
  `,
})
export class UiLabelComponent {
  @Input() iconClass = 'fa fa-fw'
  @Input() icon: string
  @Input() iconAfter: string
  @Input() label: string

  get iconLeft(): string {
    return [this.iconClass, this.icon, this.label ? 'mr-2' : ''].join(' ')
  }
  get iconRight(): string {
    return [this.iconClass, this.iconAfter, this.label ? 'ml-2' : ''].join(' ')
  }
}
