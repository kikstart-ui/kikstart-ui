import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonModule } from '@kikstart-ui/ui-button'

import { UiNoDataComponent } from './ui-no-data.component'

@NgModule({
  imports: [CommonModule, UiButtonModule],
  declarations: [UiNoDataComponent],
  exports: [UiNoDataComponent],
})
export class UiNoDataModule {}
