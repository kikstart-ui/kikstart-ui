import { Component, Input } from '@angular/core';
import { UiLink } from '../interfaces/ui-link';

@Component({
  selector: 'ui-footer',
  template: `
    <footer class="my-5 footer">
      <div class="container">
        <ng-container *ngIf="centered">
          <div class="text-center">
            <ng-container *ngIf="html"><div [innerHTML]="html"></div></ng-container>
            <ng-container *ngIf="text">{{ text }}</ng-container>
            <div class="my-3">
              <ng-container *ngIf="links.length">
                <ui-link *ngFor="let link of links" [link]="link" linkClass="text-muted"></ui-link>
              </ng-container>
            </div>
          </div>
        </ng-container>
        <ng-container *ngIf="!centered">
          <div class="float-right">
            <ng-container *ngIf="links.length">
              <ui-link *ngFor="let link of links" [link]="link" linkClass="text-muted"></ui-link>
            </ng-container>
          </div>
          <div>
            <ng-container *ngIf="html"><div [innerHTML]="html"></div></ng-container>
            <ng-container *ngIf="text">{{ text }}</ng-container>
          </div>
        </ng-container>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        border-top: 1px solid #222;
        padding-top: 60px;
      }
    `,
  ],
})
export class UiFooterComponent {
  @Input() centered = false;
  @Input() html: string;
  @Input() text: string;
  @Input() links: UiLink[] = [];
}
