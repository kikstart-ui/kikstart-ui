import { Component, Input } from '@angular/core'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  selector: 'ui-sidebar-page',
  template: `
    <div class="row">
      <div class="col-12 col-md-3">
        <ui-sidebar [icon]="icon" [links]="links" [title]="title"></ui-sidebar>
      </div>
      <div class="col-12 col-md-9">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class UiSidebarPageComponent {
  @Input() public icon: string
  @Input() public title: string
  @Input() public links: UiLink[] = []
}
