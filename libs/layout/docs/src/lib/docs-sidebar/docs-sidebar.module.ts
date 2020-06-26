import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiLinkModule } from '@kikstart-ui/ui-link'
import { DocsSidebarItemComponent } from './docs-sidebar-item.component'

import { DocsSidebarComponent } from './docs-sidebar.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiLinkModule],
  declarations: [DocsSidebarComponent, DocsSidebarItemComponent],
  exports: [DocsSidebarComponent, DocsSidebarItemComponent],
})
export class DocsSidebarModule {}
