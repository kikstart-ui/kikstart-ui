import { Component } from '@angular/core'
import { UiButton } from '@kikstart/ui'

@Component({
  templateUrl: './no-data-simple.component.html',
})
export class NoDataSimpleComponent {
  public icon = 'fa-user'
  public label = 'No users found'
  public button: UiButton = {
    icon: 'fa-plus',
    label: 'Add User',
    className: 'btn btn-outline-success',
  }
}
