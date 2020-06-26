import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutConsoleModule } from '@kikstart-ui/layout-console'

@NgModule({
  imports: [
    LayoutConsoleModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./demo-layout-index/demo-layout-index.module').then((m) => m.DemoLayoutIndexModule),
      },
      {
        path: 'console',
        loadChildren: () =>
          import('./demo-layout-console/demo-layout-console.module').then((m) => m.DemoLayoutConsoleModule),
      },
      {
        path: 'docs',
        loadChildren: () => import('./demo-layout-docs/demo-layout-docs.module').then((m) => m.DemoLayoutDocsModule),
      },
      {
        path: 'web',
        loadChildren: () => import('./demo-layout-web/demo-layout-web.module').then((m) => m.DemoLayoutWebModule),
      },
    ]),
  ],
})
export class DemosLayoutModule {}
