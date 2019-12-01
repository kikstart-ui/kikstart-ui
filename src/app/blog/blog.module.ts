import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '@kikstart/ui';
import { BlogIndexComponent } from './containers/blog-index.component';
import { BlogDetailComponent } from './containers/blog-detail.component';

import { PostListComponent } from './components/post-list.component';
import { PostDetailComponent } from './components/post-detail.component';

const routes: Routes = [
  { path: '', component: BlogIndexComponent },
  { path: '**', component: BlogDetailComponent },
];

@NgModule({
  declarations: [BlogIndexComponent, BlogDetailComponent, PostListComponent, PostDetailComponent],
  imports: [UiModule, RouterModule.forChild(routes)],
})
export class BlogModule {}
