import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiListModule } from '@kikstart-ui/ui-list'
import { UiLabelModule } from '@kikstart-ui/ui-label'
import { DemoSharedModule } from '../../demo-shared.module'

import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-list-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiListModule,
    UiLabelModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiListDemoModule {}
