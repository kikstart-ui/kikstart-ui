import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiFooterComponent } from './ui-footer.component'
import { UiLinksModule } from '../ui-links/ui-links.module'

@NgModule({
  imports: [CommonModule, UiLinksModule],
  declarations: [UiFooterComponent],
  exports: [UiFooterComponent, UiFooterComponent],
})
export class UiFooterModule {}
