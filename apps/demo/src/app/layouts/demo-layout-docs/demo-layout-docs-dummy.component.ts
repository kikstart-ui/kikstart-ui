import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  template: `
    <ng-container *ngIf="data$ | async as data">
      <pre>{{ data.title }}</pre>
    </ng-container>
  `,
})
export class DemoLayoutDocsDummyComponent {
  data$ = this.route.data
  constructor(private readonly route: ActivatedRoute) {}
}
