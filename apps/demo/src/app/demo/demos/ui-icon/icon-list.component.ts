import { Component } from '@angular/core'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { UiIconService } from '@kikstart-ui/ui-icon'

@Component({
  template: `
    <div class="row">
      <ng-container *ngFor="let icon of icons">
        <div class="col-md-2 text-center mb-3">
          <ui-icon size="4x" [icon]="icon"></ui-icon>
          <h6 class="my-3">{{ icon.iconName.toString() }}</h6>
        </div>
      </ng-container>
    </div>
  `,
})
export class IconListComponent {
  public icons: IconDefinition[]
  constructor(private readonly service: UiIconService) {
    this.icons = this.service.icons
  }
}
