import { NgModule } from '@angular/core';
import { UiModule } from '@kikstart/ui';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { DemoViewerComponent } from './containers/demo-viewer.component';

@NgModule({
  declarations: [DemoViewerComponent],
  exports: [UiModule, DemoViewerComponent],
  imports: [UiModule, TabsModule.forRoot()],
})
export class DemoSharedModule {}
