import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiRenderModule } from '@kikstart-ui/ui-render'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'
import { RenderDemoComponent } from './render-demo.component'

import { components, config } from './ui-render-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiRenderModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components, RenderDemoComponent],
  entryComponents: [...components, RenderDemoComponent],
})
export class UiRenderDemoModule {}
