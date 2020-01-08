import { Component, Input } from '@angular/core'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormGroup } from '@angular/forms'
import { BsModalRef } from 'ngx-bootstrap/modal'

import { Observable, of } from 'rxjs'

@Component({
  template: `
    <div class="card">
      <div class="card-header" *ngIf="title">{{ title }}</div>
      <div class="alert alert-info" *ngIf="loading">Submitting data...</div>
      <!--      <div class="alert alert-danger" *ngIf="error">{{ error }}</div>-->
      <!--      <div class="alert alert-success" *ngIf="success">{{ success }}</div>-->
      <div class="card-body">
        <ui-loading></ui-loading>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        min-width: 400px;
      }
    `,
  ],
})
export class UiDialogProgressComponent {
  loading: boolean
  error: string
  success: string

  @Input() fields: FormlyFieldConfig[]
  @Input() form = new FormGroup({})
  @Input() model: any = {}
  @Input() title: string
  @Input() handler: (data: any) => Observable<any> = data => of(data)

  constructor(public ref: BsModalRef) {}

  cancel() {
    this.ref.hide()
  }

  submit() {
    this.error = null
    this.loading = true
    this.form.disable()
    this.handler(this.model).subscribe(
      () => {
        this.loading = false
        this.success = 'Success!'
        setTimeout(() => this.ref.hide(), 500)
      },
      err => {
        this.error = err
        this.loading = false
        this.form.enable()
        console.log(err)
      },
    )
  }
}
