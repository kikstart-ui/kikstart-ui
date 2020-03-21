import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TimeagoModule } from 'ngx-timeago'

import { UiDropdownComponent } from './ui-dropdown.component'

@NgModule({
  imports: [TimeagoModule, CommonModule],
  declarations: [UiDropdownComponent],
  exports: [UiDropdownComponent],
})
export class UiDropdownModule {}
