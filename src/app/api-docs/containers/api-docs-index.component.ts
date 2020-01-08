import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'
import { UiService } from '@kikstart/ui'

import { ApiDocsService } from '../services/api-docs.service'

@Component({
  template: `
    <div class="row">
      <div class="col-12 col-md-3">
        <ui-sidebar [links]="navigation$ | async"></ui-sidebar>
      </div>
      <div class="col-12 col-md-9">
        <ng-container *ngIf="document$ | async as document">
          <app-doc-properties [document]="document"></app-doc-properties>
        </ng-container>
      </div>
    </div>
  `,
})
export class ApiDocsIndexComponent implements OnInit {
  public navigation$: Observable<any>
  public document$: Observable<any>

  constructor(
    public route: ActivatedRoute,
    public service: ApiDocsService,
    private ui: UiService,
  ) {}

  ngOnInit() {
    this.ui.setMetaData({ title: 'Docs' })
    this.navigation$ = this.service.navigation$
    this.document$ = this.route.url.pipe(
      map(segments => segments.map(segment => segment.path).join('/')),
      switchMap(url => this.service.getPage(url)),
    )
  }
}
