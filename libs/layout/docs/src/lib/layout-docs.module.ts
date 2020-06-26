import { NgModule } from '@angular/core'
import { DocsLayoutModule } from './docs-layout/docs-layout.module'
import { DocsSidebarModule } from './docs-sidebar/docs-sidebar.module'

@NgModule({
  imports: [DocsLayoutModule, DocsSidebarModule],
  exports: [DocsLayoutModule, DocsSidebarModule],
})
export class LayoutDocsModule {}
