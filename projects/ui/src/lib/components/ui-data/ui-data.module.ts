import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiDataComponent } from './ui-data.component'
import { UiDebugModule } from '../ui-debug/ui-debug.module'

@NgModule({
  imports: [CommonModule, UiDebugModule],
  declarations: [UiDataComponent],
  exports: [UiDataComponent],
})
export class UiDataModule {}
