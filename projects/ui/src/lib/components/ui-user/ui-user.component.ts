import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'ui-user',
  template: `
    <div class="media">
      <img [attr.src]="avatar" class="mr-3 avatar" *ngIf="avatar" />
      <div class="media-body" *ngIf="!onlyPicture">
        <h5 *ngIf="!link" class="my-0">{{ name }}</h5>
        <h5 *ngIf="link" class="my-0">
          <a [routerLink]="link">{{ name }}</a>
        </h5>
        {{ title }}
      </div>
    </div>
  `,
  styles: [
    `
      .avatar {
        border-radius: 50%;
        height: 48px;
      }
    `,
  ],
})
export class UiUserComponent implements OnInit {
  @Input() public avatar: string
  @Input() public link: string | string[]
  @Input() public name: string
  @Input() public title: string
  @Input() public onlyPicture = false

  constructor() {}

  ngOnInit() {}
}
