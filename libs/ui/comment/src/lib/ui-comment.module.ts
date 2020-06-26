import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { UiAvatarModule } from '@kikstart-ui/ui-avatar'
import { UiButtonModule } from '@kikstart-ui/ui-button'
import { UiFormModule } from '@kikstart-ui/ui-form'
import { UiLinkModule } from '@kikstart-ui/ui-link'
import { TimeagoModule } from 'ngx-timeago'

import { UiCommentFormComponent } from './ui-comment-form.component'
import { UiCommentComponent } from './ui-comment.component'

@NgModule({
  imports: [CommonModule, UiAvatarModule, UiButtonModule, UiFormModule, UiLinkModule, TimeagoModule.forRoot()],
  declarations: [UiCommentComponent, UiCommentFormComponent],
  exports: [UiCommentComponent, UiCommentFormComponent],
})
export class UiCommentModule {}
