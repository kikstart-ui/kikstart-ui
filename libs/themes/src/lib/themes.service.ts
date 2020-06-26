import { DOCUMENT } from '@angular/common'
import { Inject, Injectable, Optional } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { NAME, VERSION } from '../version'
import { Theme } from './theme'
import { ThemesConfig } from './themes.config'

@Injectable()
export class ThemesService {
  public readonly name = NAME
  public readonly version = VERSION
  _selected = new BehaviorSubject<Theme>(null)
  selected$ = this._selected.asObservable()
  selected: Theme

  themes(): Theme[] {
    return this.config.themes
  }

  setThemes(themes: Theme[]) {
    this.config.themes = themes
  }

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Optional() private readonly config: ThemesConfig,
  ) {
    const theme = localStorage.getItem('theme') || this.config.themes[0].name
    const found = this.config.themes.find((t) => t?.name === theme) || this.config.themes[0]
    this.loadTheme(found)
  }

  loadTheme(theme: Theme) {
    this._selected.next(theme)
    this.selected = theme
    localStorage.setItem('theme', theme?.name)
    const head = this.document.getElementsByTagName('head')[0]
    const themeLink = this.document.getElementById('client-theme') as HTMLLinkElement
    if (themeLink) {
      themeLink.href = theme?.css
    } else {
      const style = this.document.createElement('link')
      style.id = 'client-theme'
      style.rel = 'stylesheet'
      style.href = theme?.css

      head.appendChild(style)
    }
  }
}
