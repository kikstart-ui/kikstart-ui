import { Component, OnInit } from '@angular/core';
import { DocsService } from '../services/docs.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  template: `
    <div class="row">
      <div class="col-3">
        <ui-sidebar [links]="service.navigation$ | async"></ui-sidebar>
      </div>
      <div class="col-9">
        <ng-container *ngIf="document$ | async as document">
          <ui-card>
            <ui-card-header [cardTitle]="document.title"></ui-card-header>
            <ui-card-body>
              <div [innerHTML]="document.content"></div>
            </ui-card-body>
          </ui-card>
        </ng-container>
      </div>
    </div>
  `,
})
export class DocsIndexComponent implements OnInit {
  public url: string;
  public document$: Observable<any>;

  constructor(public route: ActivatedRoute, public service: DocsService) {}

  ngOnInit() {
    this.document$ = this.route.url.pipe(
      map(segments => segments.map(segment => segment.path).join('/')),
      tap(url => (this.url = url)),
      switchMap(url => this.service.getDocument(url)),
    );
  }
}
