import { Component, Input } from '@angular/core';
import { Post } from '../interface/post';

@Component({
  selector: 'app-post-list',
  template: `
    <div *ngFor="let post of posts" class="mb-5">
      <ui-card>
        <ui-card-body>
          <h4>
            <small class="text-muted">{{ post.created }}</small>
          </h4>
          <h2 class="card-title my-4">
            <a [routerLink]="post.id">{{ post.title }}</a>
          </h2>
          <div [innerHTML]="post.snippet"></div>
          <div class="my-3">
            <ui-link
              [link]="{ path: post.id, label: 'Read More', iconAfter: 'ml-2 fa fa-angle-double-right' }"
            ></ui-link>
          </div>
        </ui-card-body>
      </ui-card>
    </div>
  `,
})
export class PostListComponent {
  @Input() posts: Post[] = [];
}
