import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiCardModule } from '@kikstart-ui/ui-card'
import { UiLabelModule } from '@kikstart-ui/ui-label'
import { DemoSharedModule } from '../../demo-shared.module'

import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-card-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiCardModule,
    UiLabelModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiCardDemoModule {}
