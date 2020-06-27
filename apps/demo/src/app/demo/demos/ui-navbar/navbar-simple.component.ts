import { Component } from '@angular/core'

@Component({
  templateUrl: './navbar-simple.component.html',
})
export class NavbarSimpleComponent {
  public logo = 'assets/logo.png'
  public title = 'Kikstart UI'
  public links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]
}
