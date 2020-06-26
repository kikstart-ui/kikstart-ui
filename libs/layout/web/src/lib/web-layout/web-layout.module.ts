import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiLinkModule } from '@kikstart-ui/ui-link'

import { WebLayoutComponent } from './web-layout.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLinkModule],
  declarations: [WebLayoutComponent],
  exports: [WebLayoutComponent],
})
export class WebLayoutModule {}
