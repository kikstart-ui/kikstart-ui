import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiLoadingComponent } from './ui-loading.component'
import { UiLoadingIconComponent } from './ui-loading-icon.component'

@NgModule({
  imports: [CommonModule],
  declarations: [UiLoadingComponent, UiLoadingIconComponent],
  exports: [UiLoadingComponent, UiLoadingIconComponent],
})
export class UiLoadingModule {}
