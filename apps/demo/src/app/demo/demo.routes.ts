import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ui-avatar' },
  {
    path: 'layout-console',
    loadChildren: () =>
      import('./demos/layout-console/layout-console-demo.module').then((m) => m.LayoutConsoleDemoModule),
  },
  {
    path: 'lib-editorjs',
    loadChildren: () => import('./demos/lib-editorjs/lib-editorjs-demo.module').then((m) => m.LibEditorjsDemoModule),
  },
  {
    path: 'themes-colors',
    loadChildren: () => import('./demos/themes-colors/themes-colors-demo.module').then((m) => m.ThemesColorsDemoModule),
  },
  {
    path: 'themes-gradients',
    loadChildren: () =>
      import('./demos/themes-gradients/themes-gradients-demo.module').then((m) => m.ThemesGradientsDemoModule),
  },
  {
    path: 'themes-switcher',
    loadChildren: () =>
      import('./demos/themes-switcher/themes-switcher-demo.module').then((m) => m.ThemesSwitcherDemoModule),
  },
  {
    path: 'ui-avatar',
    loadChildren: () => import('./demos/ui-avatar/ui-avatar-demo.module').then((m) => m.UiAvatarDemoModule),
  },
  {
    path: 'ui-brand',
    loadChildren: () => import('./demos/ui-brand/ui-brand-demo.module').then((m) => m.UiBrandDemoModule),
  },
  {
    path: 'ui-button',
    loadChildren: () => import('./demos/ui-button/ui-button-demo.module').then((m) => m.UiButtonDemoModule),
  },
  {
    path: 'ui-card',
    loadChildren: () => import('./demos/ui-card/ui-card-demo.module').then((m) => m.UiCardDemoModule),
  },
  {
    path: 'ui-cart-icon',
    loadChildren: () => import('./demos/ui-cart-icon/ui-cart-icon-demo.module').then((m) => m.UiCartIconDemoModule),
  },
  {
    path: 'ui-code',
    loadChildren: () => import('./demos/ui-code/ui-code-demo.module').then((m) => m.UiCodeDemoModule),
  },
  {
    path: 'ui-comment',
    loadChildren: () => import('./demos/ui-comment/ui-comment-demo.module').then((m) => m.UiCommentDemoModule),
  },
  {
    path: 'ui-comment-form',
    loadChildren: () =>
      import('./demos/ui-comment-form/ui-comment-form-demo.module').then((m) => m.UiCommentFormDemoModule),
  },
  {
    path: 'ui-form',
    loadChildren: () => import('./demos/ui-form/ui-form-demo.module').then((m) => m.UiFormDemoModule),
  },
  {
    path: 'ui-hero',
    loadChildren: () => import('./demos/ui-hero/ui-hero-demo.module').then((m) => m.UiHeroDemoModule),
  },
  {
    path: 'ui-icon',
    loadChildren: () => import('./demos/ui-icon/ui-icon-demo.module').then((m) => m.UiIconDemoModule),
  },
  {
    path: 'ui-list',
    loadChildren: () => import('./demos/ui-list/ui-list-demo.module').then((m) => m.UiListDemoModule),
  },
  {
    path: 'ui-markdown',
    loadChildren: () => import('./demos/ui-markdown/ui-markdown-demo.module').then((m) => m.UiMarkdownDemoModule),
  },
  {
    path: 'ui-no-data',
    loadChildren: () => import('./demos/ui-no-data/ui-no-data-demo.module').then((m) => m.UiNoDataDemoModule),
  },
  {
    path: 'ui-price',
    loadChildren: () => import('./demos/ui-price/ui-price-demo.module').then((m) => m.UiPriceDemoModule),
  },
  {
    path: 'ui-render',
    loadChildren: () => import('./demos/ui-render/ui-render-demo.module').then((m) => m.UiRenderDemoModule),
  },
  {
    path: 'ui-sidebar',
    loadChildren: () => import('./demos/ui-sidebar/ui-sidebar-demo.module').then((m) => m.UiSidebarDemoModule),
  },
]
