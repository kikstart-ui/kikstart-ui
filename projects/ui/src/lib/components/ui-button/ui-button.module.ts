import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiLabelModule } from '../ui-label/ui-label.module'
import { UiLinkModule } from '../ui-link/ui-link.module'
import { UiLoadingIconModule } from '../ui-loading-icon/ui-loading-icon.module'

import { UiButtonComponent } from './ui-button.component'
import { UiButtonsComponent } from './ui-buttons.component'

@NgModule({
  imports: [CommonModule, UiLabelModule, UiLinkModule, UiLoadingIconModule],
  declarations: [UiButtonComponent, UiButtonsComponent],
  exports: [UiButtonComponent, UiButtonsComponent],
})
export class UiButtonModule {}