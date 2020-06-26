import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UiButtonModule } from '@kikstart-ui/ui-button'
import { UiFormModule } from '@kikstart-ui/ui-form'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'

import { components, config } from './ui-form-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    UiFormModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
    UiButtonModule,
  ],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiFormDemoModule {}
