import { Component } from '@angular/core'
import { UiButton } from '@kikstart-ui/ui-button'

@Component({
  templateUrl: './list-simple.component.html',
})
export class ListSimpleComponent {
  public list = 'assets/logo.png'
  public buttons: UiButton[] = [
    {
      icon: 'fa-trash',
      handler: (item) => {
        console.log('Trash', item)
      },
    },
  ]
  public items = [
    { id: 1, title: 'Item 1', description: 'This is item 1' },
    { id: 2, title: 'Item 2', description: 'This is item 2', active: true },
    { id: 3, title: 'Item 3', description: 'This is item 3' },
    { id: 4, title: 'Item 4', description: 'This is item 4' },
  ]

  public result: any = {}
  handleAction($event) {
    this.result = $event
  }
}
