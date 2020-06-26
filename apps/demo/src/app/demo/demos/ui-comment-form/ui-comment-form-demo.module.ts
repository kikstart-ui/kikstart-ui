import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiCommentModule } from '@kikstart-ui/ui-comment'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-comment-form-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiCommentModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiCommentFormDemoModule {}
