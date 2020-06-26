import { Component } from '@angular/core'

@Component({
  template: `
    <ui-hero
      class="grd-kikstart-2 mb-3 mb-md-5"
      [centered]="false"
      [title]="title"
      [description]="description"
    ></ui-hero>
  `,
})
export class DemoPageAboutComponent {
  title = 'About'
  description = `Kikstart UI is a library that allows you to quickly build high-quality UI's.`
}
