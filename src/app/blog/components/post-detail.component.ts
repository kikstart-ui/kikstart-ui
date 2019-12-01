import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../interface/post';

@Component({
  selector: 'app-post-detail',
  template: `
    <ui-hero [title]="post.title" [description]="post.created"></ui-hero>
    <div class="row">
      <div class="col-8 offset-2">
        <ui-card>
          <ui-card-body>
            <div [innerHTML]="post.content"></div>
          </ui-card-body>
        </ui-card>
      </div>
    </div>
  `,
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit() {}
}
