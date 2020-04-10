import { NgModule } from '@angular/core'
// import { CommonModule } from '@angular/common'
// import { TimeagoModule } from 'ngx-timeago'

import { UiListComponent } from './ui-list.component'
import { UiListItemComponent } from './ui-list-item.component'

@NgModule({
  imports: [],
  declarations: [UiListComponent, UiListItemComponent],
  exports: [UiListComponent, UiListItemComponent],
})
export class UiListModule {}
