import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../components/demo.component'

import { components, config } from './ui-service-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiServiceDemoModule {}
