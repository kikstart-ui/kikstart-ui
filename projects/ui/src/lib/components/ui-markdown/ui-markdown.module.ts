import { NgModule } from '@angular/core'
import { ShowdownModule } from 'ngx-showdown'

import { UiMarkdownComponent } from './ui-markdown.component'

@NgModule({
  imports: [ShowdownModule],
  declarations: [UiMarkdownComponent],
  exports: [UiMarkdownComponent],
})
export class UiMarkdownModule {}
