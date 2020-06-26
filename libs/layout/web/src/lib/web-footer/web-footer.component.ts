import { Component, Input } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'web-footer',
  template: `
    <footer>
      <div [class]="class" *ngIf="sanitizedHtml" [innerHTML]="sanitizedHtml"></div>
    </footer>
  `,
})
export class WebFooterComponent {
  @Input() html: string
  @Input() class: string

  constructor(public readonly sanitizer: DomSanitizer) {}

  get sanitizedHtml() {
    return this.html ? this.sanitizer.bypassSecurityTrustHtml(this.html) : null
  }
}
