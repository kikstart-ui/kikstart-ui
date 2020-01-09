import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { ShowdownComponent } from 'ngx-showdown'

@Component({
  selector: 'ui-markdown',
  template: `
    <showdown [value]="data"></showdown>
  `,
})
export class UiMarkdownComponent implements OnInit {
  @ViewChild(ShowdownComponent, { static: true }) showdownComponent: ShowdownComponent
  @Input() public data: string

  ngOnInit() {
    this.showdownComponent.setOptions({ emoji: true })
  }
}
