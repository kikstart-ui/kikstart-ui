import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiLinkModule } from '@kikstart-ui/ui-link'

import { WebPageComponent } from './web-page.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLinkModule],
  declarations: [WebPageComponent],
  exports: [WebPageComponent],
})
export class WebPageModule {}
