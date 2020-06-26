import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiButtonModule } from '@kikstart-ui/ui-button'
import { UiLabelModule } from '@kikstart-ui/ui-label'
import { UiLinkModule } from '@kikstart-ui/ui-link'

import { UiListComponent } from './ui-list.component'
import { UiListItemComponent } from './ui-list-item.component'

@NgModule({
  imports: [CommonModule, UiButtonModule, UiLabelModule, UiLinkModule],
  declarations: [UiListComponent, UiListItemComponent],
  exports: [UiListComponent, UiListItemComponent],
})
export class UiListModule {}
