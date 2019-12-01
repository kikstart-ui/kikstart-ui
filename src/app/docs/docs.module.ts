import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '../ui/ui.module';
import { DocsIndexComponent } from './containers/docs-index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: '**', component: DocsIndexComponent },
];

@NgModule({
  declarations: [DocsIndexComponent],
  imports: [UiModule, RouterModule.forChild(routes)],
})
export class DocsModule {}
