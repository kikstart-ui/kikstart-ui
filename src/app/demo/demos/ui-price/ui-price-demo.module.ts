import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-price-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiPriceDemoModule {}
