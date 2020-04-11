import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiListComponent } from './ui-list.component'
import { UiListItemComponent } from './ui-list-item.component'

@NgModule({
  imports: [CommonModule],
  declarations: [UiListComponent, UiListItemComponent],
  exports: [UiListComponent, UiListItemComponent],
})
export class UiListModule {}
