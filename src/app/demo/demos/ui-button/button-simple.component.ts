import { Component } from '@angular/core'
import { UiButton } from '@kikstart/ui'

@Component({
  templateUrl: './button-simple.component.html',
})
export class ButtonSimpleComponent {
  public button = 'assets/logo.png'
  public examples: { name: string; buttons: UiButton[] }[] = [
    {
      name: 'Simple button',
      buttons: [
        {
          label: 'Save',
          action: 'SAVE',
          className: 'btn-outline-success',
        },
        {
          label: 'Save',
          action: 'DISABLED',
          className: 'btn-outline-success',
          disabled: true,
        },
      ],
    },
    {
      name: 'Button with icon and color',
      buttons: [
        {
          icon: 'fa-trash',
          label: 'Delete',
          action: 'DELETE',
          className: 'btn-outline-danger',
        },
        {
          label: 'Delete',
          iconAfter: 'fa-trash',
          action: 'DELETE',
          className: 'btn-outline-danger',
        },
      ],
    },
    {
      name: 'Button with custom handler',
      buttons: [
        {
          icon: 'fa-refresh',
          className: 'btn-sm btn-outline-info',
          handler: $event => {
            this.result = {
              ...$event,
              inline: ['Handle Button Actions'],
            }
          },
        },
      ],
    },
  ]
  public result: any = {}
  handleAction($event) {
    this.result = $event
  }
}
