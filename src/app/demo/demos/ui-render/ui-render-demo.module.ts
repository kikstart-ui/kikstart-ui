import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../components/demo.component'

import { components, config } from './ui-render-demo.config'
import { RenderDemoComponent } from './render-demo.component'

@NgModule({
  imports: [
    DemoSharedModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components, RenderDemoComponent],
  entryComponents: [...components, RenderDemoComponent],
})
export class UiRenderDemoModule {}
