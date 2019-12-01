import { Component, Input } from '@angular/core';
import { UiLink } from '../interfaces/ui-link';

@Component({
  selector: 'ui-footer',
  template: `
    <div class="text-center my-5">
      <ng-container *ngIf="html"><div [innerHTML]="html"></div></ng-container>
      <ng-container *ngIf="text">{{ text }}</ng-container>
      <ng-container *ngIf="links.length">
        <div class="my-3">
          <ui-link *ngFor="let link of links" [link]="link" linkClass="text-muted"></ui-link>
        </div>
      </ng-container>
    </div>
  `,
})
export class UiFooterComponent {
  @Input() html: string;
  @Input() text: string;
  @Input() links: UiLink[] = [];
}
