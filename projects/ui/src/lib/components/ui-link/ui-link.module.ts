import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { UiLinkComponent } from './ui-link.component'
import { UiLabelModule } from '../ui-label/ui-label.module'

@NgModule({
  imports: [CommonModule, RouterModule, UiLabelModule],
  declarations: [UiLinkComponent],
  exports: [UiLinkComponent],
})
export class UiLinkModule {}
