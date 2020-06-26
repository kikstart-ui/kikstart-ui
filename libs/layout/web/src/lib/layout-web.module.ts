import { NgModule } from '@angular/core'

import { WebFooterModule } from './web-footer/web-footer.module'
import { WebHeaderModule } from './web-header/web-header.module'
import { WebLayoutModule } from './web-layout/web-layout.module'
import { WebPageModule } from './web-page/web-page.module'

@NgModule({
  imports: [WebFooterModule, WebHeaderModule, WebLayoutModule, WebPageModule],
  exports: [WebFooterModule, WebHeaderModule, WebLayoutModule, WebPageModule],
})
export class LayoutWebModule {}
