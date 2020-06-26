import { Component } from '@angular/core'

import { RenderDemoComponent } from './render-demo.component'

@Component({
  template: ` <ui-render [component]="component" [inputs]="inputs" [outputs]="outputs"></ui-render> `,
})
export class RenderSimpleComponent {
  public component = RenderDemoComponent
  public inputs = {
    label: 'Click Me',
    buttonClass: 'success',
  }
  public outputs = {
    action: ($event) => this.handleAction($event),
  }

  handleAction($event) {
    console.log(JSON.stringify($event))
  }
}
