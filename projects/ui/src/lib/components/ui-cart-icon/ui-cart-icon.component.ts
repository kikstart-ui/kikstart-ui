import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-cart-icon',
  template: `
    <a [routerLink]="link" class="btn text-primary mr-2 m-0 p-0 position-relative">
      <i class="fa-2x fa fa-fw fa-shopping-cart"></i>
      <span
        *ngIf="showBadge"
        class="badge badge-warning text-dark position-absolute"
        [style.right.px]="-3"
        [style.top.px]="-3"
        >{{ count }}</span
      >
    </a>
  `,
})
export class UiCartIconComponent {
  @Input() count: number
  @Input() link = '/cart'

  get showBadge() {
    return this.count && this.count > 0
  }
}
