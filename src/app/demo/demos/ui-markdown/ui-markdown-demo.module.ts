import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiMarkdownModule } from '@kikstart/ui'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-markdown-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiMarkdownModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiMarkdownDemoModule {}
