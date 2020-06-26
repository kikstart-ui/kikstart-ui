import { Component, Input } from '@angular/core'
import { ConsoleLink } from '../console-sidebar/console-link'

@Component({
  selector: 'console-page',
  template: `
    <div class="d-flex flex-column justify-content-between h-100">
      <div class="d-flex justify-content-between">
        <div class="align-self-center" *ngIf="backLinkPath">
          <a [routerLink]="backLinkPath" class="ml-3">
            <i class="fa fa-fw fa-arrow-left"></i>
          </a>
        </div>
        <ng-container *ngIf="link || title">
          <div class="align-self-center" *ngIf="link">
            <a [routerLink]="link.path" class="ml-3">
              <i *ngIf="link.icon" class="fa fa-fw {{ link.icon }} "></i>
              <span *ngIf="link.label">{{ link.label }}</span>
            </a>
          </div>
          <div class="align-self-center px-3 p-2 flex-grow-1 d-flex" *ngIf="title">
            <span [style.font-size.rem]="2">{{ title }}</span>
            <ng-content select=".left"></ng-content>
          </div>
          <div class="align-self-center px-3 p-2">
            <ng-content select=".right"></ng-content>
          </div>
        </ng-container>
      </div>
      <div *ngIf="tabs && tabs.length" class="p-2">
        <console-tabs [tabs]="tabs"></console-tabs>
      </div>
      <div class="flex-grow-1 h-100">
        <div class="container-md mt-3 mt-lx-5">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class ConsolePageComponent {
  @Input() public backLinkPath?: string
  @Input() public link?: ConsoleLink
  @Input() public tabs?: ConsoleLink[]
  @Input() public title: string
}
