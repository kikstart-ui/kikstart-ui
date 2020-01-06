import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiModule, UiPageSidebarRouteComponent } from '@kikstart/ui';

const routes: Routes = [
  {
    path: '',
    component: UiPageSidebarRouteComponent,
    data: {
      title: 'Component Demos',
      links: [
        { path: '/demo/ui-avatar', label: 'ui-avatar' },
        { path: '/demo/ui-code', label: 'ui-code' },
        { path: '/demo/ui-comment', label: 'ui-comment' },
        { path: '/demo/ui-comment-form', label: 'ui-comment-form' },
      ],
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'ui-avatar' },
      {
        path: 'ui-avatar',
        loadChildren: () => import('./demos/ui-avatar/ui-avatar-demo.module').then(m => m.UiAvatarDemoModule),
      },
      {
        path: 'ui-code',
        loadChildren: () => import('./demos/ui-code/ui-code-demo.module').then(m => m.UiCodeDemoModule),
      },
      {
        path: 'ui-comment',
        loadChildren: () => import('./demos/ui-comment/ui-comment-demo.module').then(m => m.UiCommentDemoModule),
      },
      {
        path: 'ui-comment-form',
        loadChildren: () =>
          import('./demos/ui-comment-form/ui-comment-form-demo.module').then(m => m.UiCommentFormDemoModule),
      },
    ],
  },
];

@NgModule({
  imports: [UiModule, RouterModule.forChild(routes)],
})
export class DemoModule {}
