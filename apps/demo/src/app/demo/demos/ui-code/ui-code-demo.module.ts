import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiCodeModule } from '@kikstart-ui/ui-code'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-code-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiCodeModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiCodeDemoModule {}
