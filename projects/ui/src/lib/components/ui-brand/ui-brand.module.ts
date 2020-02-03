import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiBrandComponent } from './ui-brand.component'

@NgModule({
  imports: [CommonModule],
  declarations: [UiBrandComponent],
  exports: [UiBrandComponent],
})
export class UiBrandModule {}
