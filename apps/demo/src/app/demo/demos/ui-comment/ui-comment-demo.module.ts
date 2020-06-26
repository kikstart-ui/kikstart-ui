import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiCommentModule } from '@kikstart-ui/ui-comment'
import { UiFormModule } from '@kikstart-ui/ui-form'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-comment-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiFormModule,
    UiCommentModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiCommentDemoModule {}
