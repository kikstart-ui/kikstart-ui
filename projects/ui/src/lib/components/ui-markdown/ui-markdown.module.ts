import { NgModule } from '@angular/core'
import { MarkdownModule } from 'ngx-markdown'

import { UiMarkdownComponent } from './ui-markdown.component'

@NgModule({
  imports: [MarkdownModule.forRoot()],
  declarations: [UiMarkdownComponent],
  exports: [UiMarkdownComponent],
})
export class UiMarkdownModule {}
