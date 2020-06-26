import { Component, Input } from '@angular/core'
import { UiLink } from '@kikstart-ui/ui-link'

@Component({
  selector: 'ui-footer',
  template: `
    <footer class="footer">
      <div class="container-xl">
        <ng-container *ngIf="centered">
          <div class="text-center">
            <div *ngIf="html" [innerHTML]="html"></div>
            <div *ngIf="text">{{ text }}</div>
            <div class="my-2" *ngIf="links && links.length">
              <ng-container *ngFor="let link of links">
                <ui-link [link]="link" linkClass="text-muted"></ui-link>
              </ng-container>
            </div>
          </div>
        </ng-container>
        <ng-container *ngIf="!centered">
          <div class="float-right">
            <ui-links *ngIf="links && links.length" [links]="links" linkClass="text-muted"></ui-links>
          </div>
          <div>
            <div *ngIf="html" [innerHTML]="html"></div>
            <div *ngIf="text">{{ text }}</div>
          </div>
        </ng-container>
      </div>
    </footer>
  `,
})
export class UiFooterComponent {
  @Input() centered = false
  @Input() html: string
  @Input() text: string
  @Input() links: UiLink[] = []
}
