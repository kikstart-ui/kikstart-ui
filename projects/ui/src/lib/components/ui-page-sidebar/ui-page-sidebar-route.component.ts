import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Component({
  template: `
    <ui-page-sidebar [links]="links$ | async" [title]="title$ | async">
      <router-outlet></router-outlet>
    </ui-page-sidebar>
  `,
})
export class UiPageSidebarRouteComponent {
  public title$: Observable<string>
  public links$: Observable<any[]>

  constructor(private route: ActivatedRoute) {
    this.title$ = this.route.data.pipe(map((data) => data.title || ''))
    this.links$ = this.route.data.pipe(map((data) => data.links || []))
  }
}
