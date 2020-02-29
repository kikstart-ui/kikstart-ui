import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { UiModule, UiPageSidebarRouteComponent } from '@kikstart/ui'

const routes: Routes = [
  {
    path: '',
    component: UiPageSidebarRouteComponent,
    data: {
      title: 'Demos',
      links: [
        { path: '/demos/ui-avatar', label: 'ui-avatar' },
        { path: '/demos/ui-brand', label: 'ui-brand' },
        { path: '/demos/ui-button', label: 'ui-button' },
        { path: '/demos/ui-card', label: 'ui-card' },
        { path: '/demos/ui-code', label: 'ui-code' },
        { path: '/demos/ui-comment', label: 'ui-comment' },
        { path: '/demos/ui-comment-form', label: 'ui-comment-form' },
        { path: '/demos/ui-form', label: 'ui-form' },
        { path: '/demos/ui-hero', label: 'ui-hero' },
        { path: '/demos/ui-markdown', label: 'ui-markdown' },
        { path: '/demos/ui-no-data', label: 'ui-no-data' },
        { path: '/demos/ui-render', label: 'ui-render' },
        { path: '/demos/ui-service', label: 'UiService' },
      ],
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'ui-avatar' },
      {
        path: 'ui-avatar',
        loadChildren: () =>
          import('./demos/ui-avatar/ui-avatar-demo.module').then(m => m.UiAvatarDemoModule),
      },
      {
        path: 'ui-brand',
        loadChildren: () =>
          import('./demos/ui-brand/ui-brand-demo.module').then(m => m.UiBrandDemoModule),
      },
      {
        path: 'ui-button',
        loadChildren: () =>
          import('./demos/ui-button/ui-button-demo.module').then(m => m.UiButtonDemoModule),
      },
      {
        path: 'ui-card',
        loadChildren: () =>
          import('./demos/ui-card/ui-card-demo.module').then(m => m.UiCardDemoModule),
      },
      {
        path: 'ui-code',
        loadChildren: () =>
          import('./demos/ui-code/ui-code-demo.module').then(m => m.UiCodeDemoModule),
      },
      {
        path: 'ui-comment',
        loadChildren: () =>
          import('./demos/ui-comment/ui-comment-demo.module').then(m => m.UiCommentDemoModule),
      },
      {
        path: 'ui-comment-form',
        loadChildren: () =>
          import('./demos/ui-comment-form/ui-comment-form-demo.module').then(
            m => m.UiCommentFormDemoModule,
          ),
      },
      {
        path: 'ui-form',
        loadChildren: () =>
          import('./demos/ui-form/ui-form-demo.module').then(m => m.UiFormDemoModule),
      },
      {
        path: 'ui-hero',
        loadChildren: () =>
          import('./demos/ui-hero/ui-hero-demo.module').then(m => m.UiHeroDemoModule),
      },
      {
        path: 'ui-markdown',
        loadChildren: () =>
          import('./demos/ui-markdown/ui-markdown-demo.module').then(m => m.UiMarkdownDemoModule),
      },
      {
        path: 'ui-no-data',
        loadChildren: () =>
          import('./demos/ui-no-data/ui-no-data-demo.module').then(m => m.UiNoDataDemoModule),
      },
      {
        path: 'ui-render',
        loadChildren: () =>
          import('./demos/ui-render/ui-render-demo.module').then(m => m.UiRenderDemoModule),
      },
      {
        path: 'ui-service',
        loadChildren: () =>
          import('./demos/ui-service/ui-service-demo.module').then(m => m.UiServiceDemoModule),
      },
    ],
  },
]

@NgModule({
  imports: [UiModule, RouterModule.forChild(routes)],
})
export class DemoModule {}
