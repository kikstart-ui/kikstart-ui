import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { UiLinkModule } from '../ui-link/ui-link.module'
import { UiLinksComponent } from './ui-links.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLinkModule],
  declarations: [UiLinksComponent],
  exports: [UiLinksComponent],
})
export class UiLinksModule {}
