import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { UiUserComponent } from './ui-user.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UiUserComponent],
  exports: [UiUserComponent],
})
export class UiUserModule {}
