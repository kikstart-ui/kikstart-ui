import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { UiIconComponent } from './ui-icon.component'
import { UiIconService } from './ui-icon.service'

@NgModule({
  declarations: [UiIconComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [UiIconService],
  exports: [UiIconComponent],
})
export class UiIconModule {}
