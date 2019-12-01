import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-card-header',
  template: `
    <div class="card-header">
      <ng-container *ngIf="cardTitle">
        <h4 class="my-1">{{ cardTitle }}</h4>
      </ng-container>
      <ng-content></ng-content>
    </div>
  `,
})
export class UiCardHeaderComponent {
  @Input() cardTitle: string;
}
