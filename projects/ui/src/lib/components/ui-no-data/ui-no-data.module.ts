import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiButtonModule } from '../ui-button/ui-button.module'
import { UiNoDataComponent } from './ui-no-data.component'

@NgModule({
  imports: [CommonModule, UiButtonModule],
  declarations: [UiNoDataComponent],
  exports: [UiNoDataComponent],
})
export class UiNoDataModule {}
