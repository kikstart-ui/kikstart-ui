import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { UiLabelModule } from '@kikstart-ui/ui-label'

import { UiLinkComponent } from './ui-link.component'
import { UiLinksComponent } from './ui-links.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLabelModule],
  declarations: [UiLinkComponent, UiLinksComponent],
  exports: [UiLinkComponent, UiLinksComponent],
})
export class UiLinkModule {}
