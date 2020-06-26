import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-loading',
  template: `
    <div *ngIf="loading" class="my-5 text-center">
      <i class="fa fa-spinner fa-spin fa-5x"></i>
    </div>
  `,
  styles: [],
})
export class UiLoadingComponent {
  @Input() public loading = true
}
