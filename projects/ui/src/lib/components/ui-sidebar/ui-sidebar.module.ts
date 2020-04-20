import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { UiSidebarComponent } from './ui-sidebar.component'
import { UiSidebarItemComponent } from './ui-sidebar-item.component'

import { UiLinkModule } from '../ui-link/ui-link.module'

@NgModule({
  imports: [CommonModule, RouterModule, UiLinkModule],
  declarations: [UiSidebarComponent, UiSidebarItemComponent],
  exports: [UiSidebarComponent, UiSidebarItemComponent],
})
export class UiSidebarModule {}
