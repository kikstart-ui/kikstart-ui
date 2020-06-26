import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiAvatarComponent } from './ui-avatar.component'

@NgModule({
  imports: [CommonModule],
  declarations: [UiAvatarComponent],
  exports: [UiAvatarComponent],
})
export class UiAvatarModule {}
