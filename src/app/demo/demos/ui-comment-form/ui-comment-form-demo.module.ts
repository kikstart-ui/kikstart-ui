import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemoSharedModule } from '../../demo-shared.module';
import { DemoViewerComponent } from '../../containers/demo-viewer.component';

import { components, config } from './ui-comment-form-demo.config';

@NgModule({
  imports: [DemoSharedModule, RouterModule.forChild([{ path: '', component: DemoViewerComponent, data: config }])],
  declarations: [...components],
  entryComponents: [...components],
})
export class UiCommentFormDemoModule {}
