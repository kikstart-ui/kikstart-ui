import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

import { UiDropdownComponent } from './ui-dropdown.component'

@NgModule({
  imports: [BsDropdownModule.forRoot(), CommonModule],
  declarations: [UiDropdownComponent],
  exports: [UiDropdownComponent],
})
export class UiDropdownModule {}
