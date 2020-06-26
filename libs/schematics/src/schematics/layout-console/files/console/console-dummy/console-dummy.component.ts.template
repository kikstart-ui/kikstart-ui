import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <ng-container *ngIf="data$ | async as data">
      <console-page [title]="data.title">
        <div class="jumbotron">
          {{ data.content }}
        </div>
      </console-page>
    </ng-container>
  `,
})
export class ConsoleDummyComponent {
  data$ = this.route.data.pipe(
    map((data) => ({
      title: data.title || 'Dummy',
      content:
        data.content || 'This is a dummy page. Content will be added soon ™️',
    }))
  );
  constructor(private readonly route: ActivatedRoute) {}
}
