import { Component } from '@angular/core'
import { Theme, ThemesService } from '@kikstart-ui/themes'

@Component({
  templateUrl: './themes-switcher-demo.component.html',
})
export class ThemesSwitcherDemoComponent {
  public themes = this.theme.themes()

  constructor(private readonly theme: ThemesService) {}

  setTheme(theme: Theme) {
    this.theme.loadTheme(theme)
  }
}
