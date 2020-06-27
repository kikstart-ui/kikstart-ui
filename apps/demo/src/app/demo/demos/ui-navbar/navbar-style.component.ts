import { Component } from '@angular/core'

@Component({
  templateUrl: './navbar-style.component.html',
})
export class NavbarStyleComponent {
  public logo = 'assets/logo.png'
  public title = 'Kikstart UI'
  public styles = ['dark', 'light', 'primary', 'secondary', 'success', 'info', 'danger', 'warning']
}
