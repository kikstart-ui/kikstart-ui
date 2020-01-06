import { NgModule } from '@angular/core';
import { UiModule } from '@kikstart/ui';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { DemoViewerComponent } from './containers/demo-viewer.component';
import { DemoViewerPreviewComponent } from './containers/demo-viewer-preview.component';

@NgModule({
  declarations: [DemoViewerComponent, DemoViewerPreviewComponent],
  exports: [UiModule, DemoViewerComponent, DemoViewerPreviewComponent],
  imports: [UiModule, TabsModule.forRoot()],
})
export class DemoSharedModule {}
