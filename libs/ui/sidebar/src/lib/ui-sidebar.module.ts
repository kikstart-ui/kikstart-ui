import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiCardModule } from '@kikstart-ui/ui-card'
import { UiLinkModule } from '@kikstart-ui/ui-link'
import { UiListModule } from '@kikstart-ui/ui-list'
import { UiSidebarPageRouteComponent } from './ui-sidebar-page-route.component'

import { UiSidebarPageComponent } from './ui-sidebar-page.component'
import { UiSidebarComponent } from './ui-sidebar.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiCardModule, UiListModule, UiLinkModule],
  declarations: [UiSidebarComponent, UiSidebarPageComponent, UiSidebarPageRouteComponent],
  exports: [UiSidebarComponent, UiSidebarPageComponent, UiSidebarPageRouteComponent],
})
export class UiSidebarModule {}
