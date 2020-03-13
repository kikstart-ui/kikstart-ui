import { Component } from '@angular/core'
import { ActivatedRoute, Data } from '@angular/router'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { UiService } from '@kikstart/ui'

@Component({
  template: `
    <ng-container *ngIf="routeData$ | async as route">
      <ng-container *ngFor="let demo of route.demos">
        <div class="mb-3">
          <ui-card>
            <ui-card-header>
              <h5 class="card-title my-0">{{ demo.title }}</h5>
            </ui-card-header>
            <ui-card-body *ngIf="demo.description">
              <div [innerHTML]="demo.description"></div>
            </ui-card-body>
            <tabset>
              <tab heading="Example">
                <ui-card-body>
                  <ui-render [component]="demo.component"></ui-render>
                </ui-card-body>
              </tab>
              <ng-container *ngFor="let file of demo.files">
                <tab [heading]="file.name">
                  <div class="m-4 p-2 alert alert-danger" *ngIf="!file.code">
                    File not found: {{ file.name }}. Did you set the code property in the route
                    data?
                  </div>
                  <div class="p-2" *ngIf="file.code">
                    <ui-code [code]="file.code" [language]="file.language"></ui-code>
                  </div>
                </tab>
              </ng-container>
            </tabset>
          </ui-card>
        </div>
      </ng-container>
    </ng-container>
  `,
  styles: [
    `
      .tab-pane {
        background-color: var(--background-color);
        border: 1px solid var(--border-color);
        border-top: 0;
      }
    `,
  ],
})
export class DemoComponent {
  public routeData$: Observable<Data>

  constructor(public route: ActivatedRoute, private ui: UiService) {
    this.routeData$ = this.route.data.pipe(
      tap(({ title }) => {
        if (title) {
          this.ui.setMetaData({ title })
        }
      }),
    )
  }
}
