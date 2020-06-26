import { Component } from '@angular/core'
import { UiButton } from '@kikstart-ui/ui-button'

@Component({
  templateUrl: './card-simple.component.html',
})
export class CardSimpleComponent {
  public card = 'assets/logo.png'
  public examples: { name: string; cards: UiButton[] }[] = [
    {
      name: 'Simple card',
      cards: [
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
      name: 'Card with icon and color',
      cards: [
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
      name: 'Card with custom handler',
      cards: [
        {
          icon: 'fa-refresh',
          className: 'btn-sm btn-outline-info',
          handler: ($event) => {
            this.result = {
              ...$event,
              inline: ['Handle Card Actions'],
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
