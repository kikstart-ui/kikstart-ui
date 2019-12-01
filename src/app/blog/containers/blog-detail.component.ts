import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BlogService } from '../services/blog.service';

@Component({
  template: `
    <ui-data [data]="data$ | async" [outlet]="outlet"> </ui-data>

    <ng-template #outlet let-data="data" let-errors="errors">
      <ui-debug *ngIf="errors && errors.length" label="Errors" [data]="errors"></ui-debug>
      <app-post-detail *ngIf="data" [post]="data"></app-post-detail>
    </ng-template>
  `,
})
export class BlogDetailComponent implements OnInit {
  public url: string;
  public data$: Observable<any>;

  constructor(public route: ActivatedRoute, public service: BlogService) {}

  ngOnInit() {
    this.data$ = this.route.url.pipe(
      map(segments => segments.map(segment => segment.path).join('/')),
      tap(url => (this.url = url)),
      switchMap(url => this.service.getPost(url)),
    );
  }
}
