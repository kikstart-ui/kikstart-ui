import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiContentComponent } from './ui-content.component'

@NgModule({
  imports: [CommonModule],
  declarations: [UiContentComponent],
  exports: [UiContentComponent],
})
export class UiContentModule {}
