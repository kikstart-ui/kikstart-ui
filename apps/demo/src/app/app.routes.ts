import { Routes } from '@angular/router'
import { AppLayoutComponent } from './app-layout.component'
import { DemosLayoutComponent } from './demos-layout.component'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: DemosLayoutComponent,
    children: [
      {
        path: 'demos',
        loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'home', loadChildren: () => import('./pages/home/app-home.module').then((m) => m.AppHomeModule) },
          {
            path: 'layouts',
            loadChildren: () => import('./layouts/demos-layout.module').then((m) => m.DemosLayoutModule),
          },
        ],
      },
      {
        path: '**',
        loadChildren: () => import('./pages/not-found/app-not-found.module').then((m) => m.AppNotFoundModule),
      },
    ],
  },
]
