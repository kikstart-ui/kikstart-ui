import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiLinkModule } from '@kikstart-ui/ui-link'

import { WebHeaderComponent } from './web-header.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLinkModule],
  declarations: [WebHeaderComponent],
  exports: [WebHeaderComponent],
})
export class WebHeaderModule {}
