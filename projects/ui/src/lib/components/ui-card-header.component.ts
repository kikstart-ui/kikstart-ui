import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card-header',
  template: `
    <div class="card-header">
      <ng-container *ngIf="cardTitle">
        <h5 class="my-0">{{ cardTitle }}</h5>
      </ng-container>
      <ng-content></ng-content>
    </div>
  `,
})
export class UiCardHeaderComponent {
  @Input() cardTitle: string;
}
