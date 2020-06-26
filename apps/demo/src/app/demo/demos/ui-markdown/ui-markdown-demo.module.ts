import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiFormModule } from '@kikstart-ui/ui-form'
import { UiMarkdownModule } from '@kikstart-ui/ui-markdown'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-markdown-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiFormModule,
    UiMarkdownModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiMarkdownDemoModule {}
