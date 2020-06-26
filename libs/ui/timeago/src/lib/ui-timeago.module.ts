import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TimeagoModule } from 'ngx-timeago'
import { UiTimeagoComponent } from './ui-timeago.component'

const COMPONENTS = [UiTimeagoComponent]

@NgModule({
  imports: [CommonModule, TimeagoModule.forRoot()],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class UiTimeagoModule {}
