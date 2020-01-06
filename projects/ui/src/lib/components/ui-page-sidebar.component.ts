import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-page-sidebar',
  template: `
    <div class="row">
      <div class="col-12 col-md-3">
        <div class="card">
          <div *ngIf="title" class="card-header">{{ title }}</div>
          <ui-list>
            <ui-list-item
              *ngFor="let link of links"
              [routerLink]="link.path"
              routerLinkActive
              #rla="routerLinkActive"
              [active]="rla.isActive"
              class="cursor-pointer"
            >
              <a [routerLink]="link.path" routerLinkActive="active">
                {{ link.label }}
              </a>
            </ui-list-item>
          </ui-list>
        </div>
      </div>
      <div class="col-12 col-md-9">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [],
})
export class UiPageSidebarComponent implements OnInit {
  @Input() public title: string;
  @Input() public links: { path: string; label: string; params?: any }[] = [];
  constructor() {}

  ngOnInit() {}
}
