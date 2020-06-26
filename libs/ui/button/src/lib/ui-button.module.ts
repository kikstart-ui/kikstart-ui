import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { UiLabelModule } from '@kikstart-ui/ui-label'
import { UiLinkModule } from '@kikstart-ui/ui-link'
import { UiLoadingModule } from '@kikstart-ui/ui-loading'

import { UiButtonComponent } from './ui-button.component'
import { UiButtonsComponent } from './ui-buttons.component'

@NgModule({
  imports: [CommonModule, UiLabelModule, UiLinkModule, UiLoadingModule],
  declarations: [UiButtonComponent, UiButtonsComponent],
  exports: [UiButtonComponent, UiButtonsComponent],
})
export class UiButtonModule {}
