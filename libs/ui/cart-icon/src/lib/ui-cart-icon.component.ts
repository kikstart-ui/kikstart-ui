import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-cart-icon',
  template: `
    <a [routerLink]="link" class="btn {{ iconClass }} mr-2 m-0 p-0 position-relative">
      <i class="fa-2x fa fa-fw fa-shopping-cart"></i>
      <span *ngIf="showBadge" [className]="badgeClass" [style.right.px]="-3" [style.top.px]="-3">{{ count }}</span>
    </a>
  `,
})
export class UiCartIconComponent {
  @Input() count: number
  @Input() link = '/cart'
  @Input() iconType: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning' = 'primary'
  @Input() badgeType: 'danger' | 'dark' | 'info' | 'light' | 'primary' | 'secondary' | 'success' | 'warning' = 'warning'
  @Input() textType: 'dark' | 'light' = 'dark'

  get showBadge() {
    return this.count && this.count > 0
  }

  get badgeClass() {
    return `${this.textClass} position-absolute badge badge-${this.badgeType}`
  }

  get iconClass() {
    return `text-${this.iconType}`
  }

  get textClass() {
    return `text-${this.textType}`
  }
}
