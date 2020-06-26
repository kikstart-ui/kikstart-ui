import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ThemesModule, THEMES } from '@kikstart-ui/themes'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'
import { ThemesSwitcherDemoComponent } from './themes-switcher-demo.component'

import { components, config } from './themes-switcher-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    ThemesModule.forRoot({
      themes: THEMES.map((theme) => ({ ...theme, css: theme.css.replace('css/', '') })),
    }),
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components, ThemesSwitcherDemoComponent],
  entryComponents: [...components, ThemesSwitcherDemoComponent],
})
export class ThemesSwitcherDemoModule {}
