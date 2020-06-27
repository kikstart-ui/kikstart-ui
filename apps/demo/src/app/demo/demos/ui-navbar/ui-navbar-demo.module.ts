import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiNavbarModule } from '@kikstart-ui/ui-navbar'
import { UiLabelModule } from '@kikstart-ui/ui-label'
import { DemoSharedModule } from '../../demo-shared.module'

import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-navbar-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiNavbarModule,
    UiLabelModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiNavbarDemoModule {}
