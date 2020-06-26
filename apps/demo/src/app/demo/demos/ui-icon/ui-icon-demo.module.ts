import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiIconModule } from '@kikstart-ui/ui-icon'
import { UiLabelModule } from '@kikstart-ui/ui-label'
import { DemoSharedModule } from '../../demo-shared.module'

import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-icon-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiIconModule,
    UiLabelModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiIconDemoModule {}
