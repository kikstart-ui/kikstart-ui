import { Component } from '@angular/core'
import { UiBrand } from '@kikstart-ui/ui-brand'
import { UiCard } from '@kikstart-ui/ui-card'
import { UiLink } from '@kikstart-ui/ui-link'
import { config } from '../../app.config'

@Component({
  template: `
    <console-page>
      <ui-hero
        class="grd-kikstart"
        [centered]="false"
        [brand]="brand"
        [description]="brand.description"
        [link]="link"
        [cards]="cards"
      ></ui-hero>
    </console-page>
  `,
})
export class AppHomeComponent {
  brand: UiBrand = config.layout.brand
  link: UiLink = {
    path: '/demos',
    label: 'Look at some demos',
    iconAfter: 'ml-2 fa fa-angle-double-right',
  }
  cards: UiCard[] = [
    {
      title: 'Demos',
      content: `Check the demos and play with the examples.`,
      links: [
        {
          label: 'Show Demos',
          path: '/demos',
          iconAfter: 'ml-2 fa fa-angle-double-right',
        },
      ],
    },
    {
      title: 'Layouts',
      content: `Some pre-defined commonly used layouts for your project`,
      links: [
        {
          label: 'Browse Layouts',
          path: '/layouts',
          iconAfter: 'ml-2 fa fa-angle-double-right',
        },
      ],
    },
    {
      title: 'Starter',
      content: `The Starter Kit is the easiest way to get started.`,
      links: [
        {
          label: 'Clone Starter',
          url: 'https://github.com/beeman/kikstart-ui-starter/generate',
          iconAfter: 'ml-2 fa fa-angle-double-right',
        },
      ],
    },
  ]
}
