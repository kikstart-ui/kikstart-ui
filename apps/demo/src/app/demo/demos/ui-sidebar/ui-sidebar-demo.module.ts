import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiSidebarModule } from '@kikstart-ui/ui-sidebar'
import { UiLabelModule } from '@kikstart-ui/ui-label'
import { DemoSharedModule } from '../../demo-shared.module'

import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-sidebar-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiSidebarModule,
    UiLabelModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiSidebarDemoModule {}
