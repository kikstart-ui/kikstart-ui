import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiButtonModule } from '@kikstart-ui/ui-button'
import { UiCodeModule } from '@kikstart-ui/ui-code'
import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-button-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiButtonModule,
    UiCodeModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiButtonDemoModule {}
