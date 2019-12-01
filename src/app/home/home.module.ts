import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '@kikstart/ui';
import { HomeIndexComponent } from './containers/home-index.component';

const routes: Routes = [{ path: '', component: HomeIndexComponent }];

@NgModule({
  imports: [UiModule, RouterModule.forChild(routes)],
  declarations: [HomeIndexComponent],
})
export class HomeModule {}
