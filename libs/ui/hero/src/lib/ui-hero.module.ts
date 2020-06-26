import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiAvatarModule } from '@kikstart-ui/ui-avatar'
import { UiBrandModule } from '@kikstart-ui/ui-brand'
import { UiCardModule } from '@kikstart-ui/ui-card'
import { UiLinkModule } from '@kikstart-ui/ui-link'

import { UiHeroComponent } from './ui-hero.component'

@NgModule({
  imports: [UiAvatarModule, UiBrandModule, UiCardModule, UiLinkModule, CommonModule],
  declarations: [UiHeroComponent],
  exports: [UiHeroComponent],
})
export class UiHeroModule {}
