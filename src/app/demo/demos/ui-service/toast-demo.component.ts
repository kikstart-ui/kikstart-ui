import { Component } from '@angular/core'
import { UiService } from '@kikstart/ui'

@Component({
  template: `
    <button class="mr-2 btn btn-success" (click)="success()">Success</button>
    <button class="mr-2 btn btn-danger" (click)="error()">Error</button>
    <button class="mr-2 btn btn-warning" (click)="warning()">Warning</button>
    <button class="mr-2 btn btn-info" (click)="info()">Info</button>
    <button class="mr-2 btn btn-primary" (click)="custom()">Custom</button>
  `,
})
export class ToastDemoComponent {
  constructor(private ui: UiService) {}

  success() {
    this.ui.toastSuccess('Success Message', 'Success Title')
  }
  error() {
    this.ui.toastError('Error Message', 'Error Title')
  }
  warning() {
    this.ui.toastWarning('Warning Message', 'Warning Title')
  }
  info() {
    this.ui.toastInfo('Info Message', 'Info Title')
  }
  custom() {
    this.ui.toastSuccess(
      `<h4>This is a Custom Info Message.</h4>
       <p>It has <b>html</b> <u>enabled!</u></p>
       <p>In here you can do whatever you please! 😎</p>`,
      null,
      {
        disableTimeOut: true,
        positionClass: 'toast-center-center',
        enableHtml: true,
        easeTime: 1000,
        messageClass: 'text-white',
        progressAnimation: 'decreasing',
        toastClass: 'bg-primary ngx-toastr w-100',
      },
    )
  }
}
