import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiHeroModule } from '@kikstart-ui/ui-hero'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-hero-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiHeroModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiHeroDemoModule {}
