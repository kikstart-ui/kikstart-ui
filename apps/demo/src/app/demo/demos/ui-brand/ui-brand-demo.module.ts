import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiBrandModule } from '@kikstart-ui/ui-brand'
import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-brand-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiBrandModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiBrandDemoModule {}
