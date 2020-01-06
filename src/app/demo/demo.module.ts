import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiModule, UiPageSidebarRouteComponent } from '@kikstart/ui';

import { DemoAuthComponent } from './containers/demo-auth.component';
import { DemoAvatarComponent } from './containers/demo-avatar.component';
import { DemoCommentComponent } from './containers/demo-comment.component';
import { DemoCommentFormComponent } from './containers/demo-comment-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: '',
    component: UiPageSidebarRouteComponent,
    data: {
      title: 'Component Demos',
      links: [
        { path: '/demo/auth', label: 'ui-auth' },
        { path: '/demo/avatar', label: 'ui-avatar' },
        { path: '/demo/comment', label: 'ui-comment' },
        { path: '/demo/comment-form', label: 'ui-comment-form' },
      ],
    },
    children: [
      { path: 'auth', component: DemoAuthComponent },
      { path: 'avatar', component: DemoAvatarComponent },
      { path: 'comment', component: DemoCommentComponent },
      { path: 'comment-form', component: DemoCommentFormComponent },
    ],
  },
];

@NgModule({
  declarations: [DemoAuthComponent, DemoAvatarComponent, DemoCommentComponent, DemoCommentFormComponent],
  imports: [UiModule, RouterModule.forChild(routes)],
})
export class DemoModule {}
