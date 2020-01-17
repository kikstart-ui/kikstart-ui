import { Component } from '@angular/core'
import { UiService } from '@kikstart/ui'

@Component({
  template: `
    <button class="mr-2 btn btn-info" (click)="change()">Change Title</button>
    <button class="mr-2 btn btn-info" (click)="another()">Another Title</button>
  `,
})
export class MetaDataDemoComponent {
  constructor(private ui: UiService) {}

  change() {
    this.ui.setMetaData({ title: 'Changed Title' })
  }
  another() {
    this.ui.setMetaData({ title: 'Another Title' })
  }
}
