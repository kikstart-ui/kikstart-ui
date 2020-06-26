import { CommonModule } from '@angular/common'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { ThemePickerComponent } from './theme-picker.component'
import { ThemesConfig } from './themes.config'
import { ThemesService } from './themes.service'
import { THEMES } from '../version'

@NgModule({
  imports: [CommonModule],
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent],
})
export class ThemesModule {
  public static forRoot(config: ThemesConfig = { themes: THEMES }): ModuleWithProviders {
    return {
      ngModule: ThemesModule,
      providers: [{ provide: ThemesConfig, useValue: config }, ThemesService],
    }
  }
}
