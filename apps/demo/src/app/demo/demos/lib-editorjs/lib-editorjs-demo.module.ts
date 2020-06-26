import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LibEditorjsModule } from '@kikstart-ui/lib-editorjs'
import { UiButtonModule } from '@kikstart-ui/ui-button'

import { DemoSharedModule } from '../../demo-shared.module'
import { DemoComponent } from '../../demo.component'
import { LibEditorjsDemoComponent } from './lib-editorjs-demo.component'

import { components, config } from './lib-editorjs-demo.config'

@NgModule({
  imports: [
    DemoSharedModule,
    RouterModule.forChild([{ path: '', component: DemoComponent, data: config }]),
    UiButtonModule,
    LibEditorjsModule,
  ],
  declarations: [...components, LibEditorjsDemoComponent],
  entryComponents: [...components, LibEditorjsDemoComponent],
})
export class LibEditorjsDemoModule {}
