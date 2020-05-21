import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-timeago-demo.config'
import { UiTimeagoModule } from 'projects/ui/src/public-api'

@NgModule({
  imports: [
    DemoSharedModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
    UiTimeagoModule,
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiTimeagoDemoModule {}
