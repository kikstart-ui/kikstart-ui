import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiCartIconComponent } from './ui-cart-icon.component'

const COMPONENTS = [UiCartIconComponent]

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class UiCartIconModule {}
