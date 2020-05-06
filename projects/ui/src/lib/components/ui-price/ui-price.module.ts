import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { UiPriceComponent } from './ui-price.component'

const COMPONENTS = [UiPriceComponent]

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class UiPriceModule {}
