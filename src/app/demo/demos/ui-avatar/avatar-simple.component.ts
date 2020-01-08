import { Component } from '@angular/core'

@Component({
  templateUrl: './avatar-simple.component.html',
})
export class AvatarSimpleComponent {
  public avatar = 'assets/logo.png'
  public examples = [
    { name: 'Small', size: 'sm' },
    { name: 'Medium (default)', size: 'md' },
    { name: 'Large', size: 'lg' },
  ]
}
