import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StyleGuideIndexComponent } from './containers/style-guide-index.component';
import { UiModule } from '@kikstart/ui';

const routes: Routes = [{ path: '', component: StyleGuideIndexComponent }];

@NgModule({
  declarations: [StyleGuideIndexComponent],
  imports: [UiModule, RouterModule.forChild(routes)],
})
export class StyleGuideModule {}
