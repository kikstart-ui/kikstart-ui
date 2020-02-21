import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-loading-icon',
  template: `
    <ng-container *ngIf="loading" class="p-0">
      <i class="fa fa-spin {{ icon }}"></i>
    </ng-container>
  `,
})
export class UiLoadingIconComponent {
  @Input() public loading = true
  @Input() public icon = 'fa-spinner'
}
