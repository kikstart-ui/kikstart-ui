import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <console-page title="Dashboard">
      <div class="row">
        <ng-container *ngFor="let card of cards">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">{{ card.header }}</div>
              <div>
                <ngx-trend
                  autoDraw="true"
                  autoDrawDuration="3000"
                  autoDrawEasing="ease-out"
                  smooth="true"
                  [data]="card.data"
                  [gradient]="card.gradient"
                  radius="10"
                  strokeWidth="2"
                  strokeLinecap="butt"
                >
                </ngx-trend>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </console-page>
  `,
})
export class ConsoleDashboardComponent {
  public cards = [
    {
      header: 'Visits',
      data: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 12],
      gradient: ['#2196F3'],
    },
    {
      header: 'Leads',
      data: [0, 3, 5, 0, 0, 1, 8, 2, 9, 12, 2, 5, 9, 5, 10],
      gradient: ['#00c6ff', '#F0F', '#FF0'],
    },
    {
      header: 'Sales',
      data: [0, 1, 8, 2, 9, 12, 0, 2, 5, 9, 5, 10, 3, 5, 0],
      gradient: ['red', 'orange', 'yellow'],
    },
  ];
}
