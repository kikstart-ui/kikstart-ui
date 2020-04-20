import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { UiPageSidebarComponent } from './ui-page-sidebar.component'
import { UiPageSidebarRouteComponent } from './ui-page-sidebar-route.component'

import { UiCardModule } from '..//ui-card/ui-card.module'
import { UiListModule } from '../ui-list/ui-list.module'

@NgModule({
  imports: [CommonModule, RouterModule, UiCardModule, UiListModule],
  declarations: [UiPageSidebarComponent, UiPageSidebarRouteComponent],
  exports: [UiPageSidebarComponent, UiPageSidebarRouteComponent],
})
export class UiPageSidebarModule {}
