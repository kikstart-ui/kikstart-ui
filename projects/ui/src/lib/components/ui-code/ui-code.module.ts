import { NgModule } from '@angular/core'
import { NumberedCodeblockModule } from '@ctrl/ngx-numbered-codeblock'
import { CommonModule } from '@angular/common'

import { UiCodeComponent } from './ui-code.component'

@NgModule({
  imports: [CommonModule, NumberedCodeblockModule],
  declarations: [UiCodeComponent],
  exports: [UiCodeComponent],
})
export class UiCodeModule {}
