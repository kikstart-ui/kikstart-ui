import { Component } from '@angular/core'

@Component({
  template: ` <ui-markdown [data]="data"></ui-markdown> `,
})
export class MarkdownSimpleComponent {
  public data = require('!!raw-loader!./markdown-simple.example.md').default as string
}
