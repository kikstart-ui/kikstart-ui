import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'docs', loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  {
    path: 'style-guide',
    loadChildren: () => import('./style-guide/style-guide.module').then(m => m.StyleGuideModule),
  },
];
