import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiHeaderComponent } from './ui-header.component'

import { UiBrandModule } from '../ui-brand/ui-brand.module'
import { UiLinkModule } from '../ui-link/ui-link.module'

@NgModule({
  imports: [CommonModule, UiBrandModule, UiLinkModule],
  declarations: [UiHeaderComponent],
  exports: [UiHeaderComponent],
})
export class UiHeaderModule {}
