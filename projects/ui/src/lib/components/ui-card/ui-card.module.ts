import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiCardBodyComponent } from './ui-card-body.component'
import { UiCardComponent } from './ui-card.component'
import { UiCardFooterComponent } from './ui-card-footer.component'
import { UiCardHeaderComponent } from './ui-card-header.component'

import { UiButtonModule } from '../ui-button/ui-button.module'
import { UiLabelModule } from '../ui-label/ui-label.module'

@NgModule({
  imports: [CommonModule, UiButtonModule, UiLabelModule],
  declarations: [
    UiCardComponent,
    UiCardBodyComponent,
    UiCardFooterComponent,
    UiCardHeaderComponent,
  ],
  exports: [UiCardComponent, UiCardFooterComponent, UiCardBodyComponent, UiCardHeaderComponent],
})
export class UiCardModule {}
