import { NgModule } from '@angular/core'
import { UiModule } from '@kikstart/ui'
import { TabsModule } from 'ngx-bootstrap/tabs'

import { DemoComponent } from './demo.component'

@NgModule({
  declarations: [DemoComponent],
  exports: [UiModule, DemoComponent],
  imports: [UiModule, TabsModule.forRoot()],
})
export class DemoSharedModule {}
