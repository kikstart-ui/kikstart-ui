import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiAuthComponent } from './ui-auth.component'

import { UiBrandModule } from './../ui-brand/ui-brand.module'
import { UiTabsModule } from './../ui-tabs/ui-tabs.module'
import { UiLoadingModule } from '../ui-loading/ui-loading.module'
import { UiLinkModule } from '../ui-link/ui-link.module'
import { UiFormModule } from '../ui-form/ui-form.module'
import { RouterModule } from '@angular/router'
import { UiFooterModule } from '../ui-footer/ui-footer.module'

@NgModule({
  imports: [
    CommonModule,
    UiBrandModule,
    UiTabsModule,
    UiLoadingModule,
    UiLinkModule,
    UiFormModule,
    RouterModule,
    UiFooterModule,
  ],
  declarations: [UiAuthComponent],
  exports: [UiAuthComponent],
})
export class UiAuthModule {}
