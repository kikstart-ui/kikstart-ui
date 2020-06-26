import { Injectable } from '@angular/core'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { cloneDeep } from 'lodash'
import { BsModalService } from 'ngx-bootstrap/modal'
import { Observable } from 'rxjs'
import { UiFormDialogComponent } from './ui-form-dialog.component'

interface UiDialogFormParams {
  handler?: (data) => Observable<any>
  fields: FormlyFieldConfig[]
  model?: any
  title?: string
  className?: string
}

@Injectable()
export class UiFormService {
  constructor(private modal: BsModalService) {}
  open({ className, model, title, handler, fields }: UiDialogFormParams) {
    this.modal.show(UiFormDialogComponent, {
      class: className || 'modal-dialog-centered',
      initialState: {
        model: cloneDeep(model),
        fields: cloneDeep(fields),
        title,
        handler,
      },
    })
  }
}
