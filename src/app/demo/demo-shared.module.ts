import { NgModule } from '@angular/core'
import { UiModule } from '@kikstart/ui'

import { DemoComponent } from './demo.component'

@NgModule({
  declarations: [DemoComponent],
  exports: [UiModule, DemoComponent],
  imports: [UiModule],
})
export class DemoSharedModule {}
