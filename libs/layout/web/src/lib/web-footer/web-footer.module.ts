import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiLinkModule } from '@kikstart-ui/ui-link'

import { WebFooterComponent } from './web-footer.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLinkModule],
  declarations: [WebFooterComponent],
  exports: [WebFooterComponent],
})
export class WebFooterModule {}
