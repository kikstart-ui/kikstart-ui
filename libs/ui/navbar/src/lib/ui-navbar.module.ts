import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { UiBrandModule } from '@kikstart-ui/ui-brand'
import { UiNavbarComponent } from './ui-navbar.component'

@NgModule({
  imports: [CommonModule, RouterModule, UiBrandModule],
  declarations: [UiNavbarComponent],
  exports: [UiNavbarComponent],
})
export class UiNavbarModule {}
