import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiCardModule } from '@kikstart-ui/ui-card'
import { UiNoDataModule } from '@kikstart-ui/ui-no-data'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-no-data-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiNoDataModule,
    UiCardModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiNoDataDemoModule {}
