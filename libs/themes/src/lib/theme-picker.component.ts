import { Component } from '@angular/core'
import { Theme } from './theme'
import { ThemesService } from './themes.service'
import { Observable } from 'rxjs'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'theme-picker',
  template: `
    <ng-container *ngIf="selectedTheme$ | async as selected">
      <ng-container *ngFor="let theme of themes">
        <span>
          <button
            class="btn py-0 my-0 px-1 mr-2"
            [style.backgroundColor]="theme.background"
            [style.color]="theme.accent"
            [class.active]="theme === selected"
            (click)="setTheme(theme)"
          >
            ●
          </button>
        </span>
      </ng-container>
    </ng-container>
  `,
})
export class ThemePickerComponent {
  public selectedTheme$: Observable<Theme>
  public themes: Theme[]

  constructor(private readonly service: ThemesService) {
    this.themes = this.service.themes()
    this.selectedTheme$ = this.service.selected$
  }

  setTheme(theme) {
    this.service.loadTheme(theme)
  }
}
