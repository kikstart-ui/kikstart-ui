import { Component } from '@angular/core'
import { UiButton } from '@kikstart-ui/ui-button'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  templateUrl: './sidebar-simple.component.html',
})
export class SidebarSimpleComponent {
  public sidebar = 'assets/logo.png'
  public buttons: UiButton[] = [
    {
      icon: 'fa-trash',
      handler: (item) => {
        console.log('Trash', item)
      },
    },
  ]
  public links: UiLink[] = [
    { path: '/demos/ui-sidebar/1', label: 'Profile', icon: 'fa-user' },
    { path: '/demos/ui-sidebar', label: 'Emails', icon: 'fa-at' },
    { path: '/demos/ui-sidebar/3', label: 'Projects', icon: 'fa-cubes' },
  ]

  public result: any = {}
  handleAction($event) {
    this.result = $event
  }
}
