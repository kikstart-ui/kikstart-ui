import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiRenderComponent } from './ui-render.component'

@NgModule({
  imports: [CommonModule],
  declarations: [UiRenderComponent],
  exports: [UiRenderComponent],
})
export class UiRenderModule {}
