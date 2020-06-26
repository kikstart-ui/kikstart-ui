import { Component, Input } from '@angular/core'

@Component({
  selector: 'web-page',
  template: `
    <main class="h-100" [class.container]="container">
      <ng-content></ng-content>
    </main>
  `,
})
export class WebPageComponent {
  @Input() container = true
}
