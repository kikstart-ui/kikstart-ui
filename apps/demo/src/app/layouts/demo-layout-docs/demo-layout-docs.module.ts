import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutDocsModule } from '@kikstart-ui/layout-docs'
import { UiHeroModule } from '@kikstart-ui/ui-hero'
import { DemoLayoutDocsDummyComponent } from './demo-layout-docs-dummy.component'
import { DemoLayoutDocsComponent } from './demo-layout-docs.component'

@NgModule({
  declarations: [DemoLayoutDocsComponent, DemoLayoutDocsDummyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoLayoutDocsComponent,
        children: [{ path: '**', component: DemoLayoutDocsDummyComponent }],
      },
    ]),
    UiHeroModule,
    LayoutDocsModule,
  ],
})
export class DemoLayoutDocsModule {}
