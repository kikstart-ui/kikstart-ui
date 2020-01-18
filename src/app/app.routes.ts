import { Routes } from '@angular/router'
import { AppLayoutComponent } from './app-layout.component'
import { AppHomeComponent } from './app-home.component'
import { App404Component } from './app-404.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: AppHomeComponent },
      {
        path: 'api-docs',
        loadChildren: () => import('./api-docs/api-docs.module').then(m => m.ApiDocsModule),
      },
      { path: 'demos', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
      { path: '**', component: App404Component },
    ],
  },
]
