import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgxEditorJSComponentModule } from '@tinynodes/ngx-editorjs'
import { NgxEditorjsPluginsModule } from '@tinynodes/ngx-editorjs-plugins'
import { LibEditorjsComponent } from './lib-editorjs.component'

@NgModule({
  declarations: [LibEditorjsComponent],
  exports: [LibEditorjsComponent],
  imports: [CommonModule, NgxEditorJSComponentModule.forRoot({ editorjs: {} }), NgxEditorjsPluginsModule],
})
export class LibEditorjsModule {}
