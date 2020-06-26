import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { UiTabsComponent } from './ui-tabs.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UiTabsComponent],
  exports: [UiTabsComponent],
})
export class UiTabsModule {}
