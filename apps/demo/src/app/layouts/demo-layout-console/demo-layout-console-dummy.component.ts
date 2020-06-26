import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  template: `
    <ng-container *ngIf="data$ | async as data">
      <console-page [title]="data.title"></console-page>
    </ng-container>
  `,
})
export class DemoLayoutConsoleDummyComponent {
  data$ = this.route.data
  constructor(private readonly route: ActivatedRoute) {}
}
