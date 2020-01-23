import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiDebugComponent } from './ui-debug.component'

@NgModule({
  imports: [CommonModule],
  declarations: [UiDebugComponent],
  exports: [UiDebugComponent],
})
export class UiDebugModule {}
