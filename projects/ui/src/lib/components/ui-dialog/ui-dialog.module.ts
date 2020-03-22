import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiDialogFormComponent } from './ui-dialog-form.component'
import { UiDialogProgressComponent } from './ui-dialog-progress.component'

import { UiFormModule } from '../ui-form/ui-form.module'
import { UiLoadingModule } from '../ui-loading/ui-loading.module'

@NgModule({
  imports: [CommonModule, UiLoadingModule, UiFormModule],
  declarations: [UiDialogFormComponent, UiDialogProgressComponent],
  exports: [UiDialogFormComponent, UiDialogProgressComponent],
})
export class UiDialogModule {}
