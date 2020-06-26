import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'
import { UiAvatarModule } from '@kikstart-ui/ui-avatar'
import { UiButtonModule } from '@kikstart-ui/ui-button'
import { UiRenderModule } from '@kikstart-ui/ui-render'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './themes-gradients-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiRenderModule,
    UiAvatarModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
    LayoutConsoleModule,
    UiButtonModule,
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class ThemesGradientsDemoModule {}
