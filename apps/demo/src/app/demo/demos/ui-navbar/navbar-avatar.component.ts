import { Component } from '@angular/core'

@Component({
  templateUrl: './navbar-avatar.component.html',
})
export class NavbarAvatarComponent {
  public avatarUrl = 'https://avatars3.githubusercontent.com/u/36491?v=4'
  public profileLinks = [{ path: '/profile', label: 'Profile' }]
}
