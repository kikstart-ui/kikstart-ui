import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiLayoutComponent } from './ui-layout.component'

import { UiContentModule } from '../ui-content/ui-content.module'
import { UiFooterModule } from '../ui-footer/ui-footer.module'
import { UiHeaderModule } from '../ui-header/ui-header.module'

@NgModule({
  imports: [CommonModule, UiHeaderModule, UiContentModule, UiFooterModule],
  declarations: [UiLayoutComponent],
  exports: [UiLayoutComponent],
})
export class UiLayoutModule {}
