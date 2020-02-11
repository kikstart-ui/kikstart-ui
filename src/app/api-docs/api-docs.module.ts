import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { UiModule } from '@kikstart/ui'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { ApiDocPropertiesComponent } from './components/api-doc-properties.component'
import { ApiDocsIndexComponent } from './containers/api-docs-index.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: '**', component: ApiDocsIndexComponent },
]

@NgModule({
  declarations: [ApiDocsIndexComponent, ApiDocPropertiesComponent],
  imports: [UiModule, RouterModule.forChild(routes), TabsModule.forRoot()],
})
export class ApiDocsModule {}
