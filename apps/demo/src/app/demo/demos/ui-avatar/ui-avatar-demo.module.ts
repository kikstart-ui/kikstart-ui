import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiAvatarModule } from '@kikstart-ui/ui-avatar'
import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-avatar-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiAvatarModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiAvatarDemoModule {}
