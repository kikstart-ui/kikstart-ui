import { Routes } from '@angular/router'
import { AppLayoutComponent } from './app-layout.component'

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'api-docs',
        loadChildren: () => import('./api-docs/api-docs.module').then(m => m.ApiDocsModule),
      },
      { path: 'demos', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    ],
  },
]
