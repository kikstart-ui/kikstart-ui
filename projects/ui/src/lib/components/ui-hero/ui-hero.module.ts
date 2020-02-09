import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiHeroComponent } from '../ui-hero/ui-hero.component'

import { UiAvatarModule } from '../ui-avatar/ui-avatar.module'
import { UiBrandModule } from '../ui-brand/ui-brand.module'
import { UiCardModule } from '../ui-card/ui-card.module'
import { UiLinkModule } from '../ui-link/ui-link.module'

@NgModule({
  imports: [UiAvatarModule, UiBrandModule, UiCardModule, UiLinkModule, CommonModule],
  declarations: [UiHeroComponent],
  exports: [UiHeroComponent],
})
export class UiHeroModule {}
