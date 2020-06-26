import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonModule } from '@kikstart-ui/ui-button'
import { UiLabelModule } from '@kikstart-ui/ui-label'

import { UiCardBodyComponent } from './ui-card-body.component'
import { UiCardComponent } from './ui-card.component'
import { UiCardFooterComponent } from './ui-card-footer.component'
import { UiCardHeaderComponent } from './ui-card-header.component'

@NgModule({
  imports: [CommonModule, UiButtonModule, UiLabelModule],
  declarations: [UiCardComponent, UiCardBodyComponent, UiCardFooterComponent, UiCardHeaderComponent],
  exports: [UiCardComponent, UiCardFooterComponent, UiCardBodyComponent, UiCardHeaderComponent],
})
export class UiCardModule {}
