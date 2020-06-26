import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiButtonModule } from '@kikstart-ui/ui-button'
import { UiIconModule } from '@kikstart-ui/ui-icon'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'
import { ThemesColorsDemoComponent } from './themes-colors-demo.component'

import { components, config } from './themes-colors-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiIconModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
    LayoutConsoleModule,
    UiButtonModule,
  ],
  declarations: [...components, ThemesColorsDemoComponent],
  entryComponents: [...components, ThemesColorsDemoComponent],
})
export class ThemesColorsDemoModule {}
