import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiCartIconModule } from '@kikstart-ui/ui-cart-icon'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-cart-icon-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiCartIconModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiCartIconDemoModule {}
