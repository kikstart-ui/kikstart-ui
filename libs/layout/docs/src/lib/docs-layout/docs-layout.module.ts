import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiLinkModule } from '@kikstart-ui/ui-link'

import { DocsLayoutComponent } from './docs-layout.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLinkModule],
  declarations: [DocsLayoutComponent],
  exports: [DocsLayoutComponent],
})
export class DocsLayoutModule {}
