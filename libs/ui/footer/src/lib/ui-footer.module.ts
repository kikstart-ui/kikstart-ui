import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiLinkModule } from '@kikstart-ui/ui-link'

import { UiFooterComponent } from './ui-footer.component'

@NgModule({
  imports: [CommonModule, UiLinkModule],
  declarations: [UiFooterComponent],
  exports: [UiFooterComponent, UiFooterComponent],
})
export class UiFooterModule {}
