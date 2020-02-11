import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TimeagoModule } from 'ngx-timeago'

import { UiCommentComponent } from './ui-comment.component'
import { UiCommentFormComponent } from './ui-comment-form.component'

import { UiAvatarModule } from '../ui-avatar/ui-avatar.module'
import { UiButtonModule } from '../ui-button/ui-button.module'
import { UiFormModule } from '../ui-form/ui-form.module'
import { UiLinkModule } from '../ui-link/ui-link.module'

@NgModule({
  imports: [
    CommonModule,
    UiAvatarModule,
    UiButtonModule,
    UiFormModule,
    UiLinkModule,
    TimeagoModule,
  ],
  declarations: [UiCommentComponent, UiCommentFormComponent],
  exports: [UiCommentComponent, UiCommentFormComponent],
})
export class UiCommentModule {}
