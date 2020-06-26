import { Component } from '@angular/core'
import { ConsoleThumb, LayoutConsoleHelper } from '@kikstart-ui/layout-console'

@Component({
  templateUrl: './layout-console-demo.component.html',
})
export class LayoutConsoleDemoComponent {
  public brand = {
    logo: '/assets/logo.svg',
    title: 'Kikstart',
    route: '/',
  }

  public thumbs: ConsoleThumb[] = [
    { id: '1', name: 'Project 1' },
    { id: '2', name: 'Project 2' },
    { id: '3', name: 'Project 3' },
  ]
  public homeLink = LayoutConsoleHelper.link('dashboard', 'Dashboard', 'fa-dashboard')

  public links = [
    LayoutConsoleHelper.header('Content', [LayoutConsoleHelper.link('/demos/layout-console', 'Pages', 'fa-globe')]),
    LayoutConsoleHelper.header('Layout', [LayoutConsoleHelper.link('/demos/layout-console', 'Files', 'fa-files')]),
  ]
  public user = {
    avatarUrl: 'https://avatars3.githubusercontent.com/u/36491?v=4',
  }
}
