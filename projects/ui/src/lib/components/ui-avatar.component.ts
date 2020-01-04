import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  template: `
    <img
      [attr.alt]="avatar"
      [attr.src]="avatar"
      class="avatar"
      [class.avatar-sm]="size === 'sm'"
      [class.avatar-md]="size === 'md'"
      [class.avatar-lg]="size === 'lg'"
      *ngIf="avatar"
    />
  `,
  styles: [
    `
      .avatar {
        border-radius: 50%;
      }
      .avatar-sm {
        height: 24px;
        width: 24px;
      }
      .avatar-md {
        height: 48px;
        width: 48px;
      }
      .avatar-lg {
        height: 96px;
        width: 96px;
      }
    `,
  ],
})
export class UiAvatarComponent {
  @Input() public alt = 'Avatar';
  @Input() public avatar: string;
  @Input() public size: 'sm' | 'md' | 'lg' = 'md';
}
