import { Component } from '@angular/core'
import { UiBrand } from '@kikstart-ui/ui-brand'
import { UiCard } from '@kikstart-ui/ui-card'

@Component({
  templateUrl: './hero-complete.component.html',
})
export class HeroCompleteComponent {
  public brand: UiBrand = {
    name: 'kikstart',
    separator: '|',
    product: 'ui',
    logo: 'assets/logo.png',
  }
  public cards: UiCard[] = [
    {
      title: 'Card 1',
      content: 'The content of card 1',
      links: [{ path: '/', label: 'Read more', iconAfter: 'ml-2 fa fa-angle-double-right' }],
    },
    {
      title: 'Card 2',
      content: 'The content of card 2',
      links: [{ path: '/', label: 'Read more', iconAfter: 'ml-2 fa fa-angle-double-right' }],
    },
    {
      title: 'Card 3',
      content: 'The content of card 3',
      links: [{ path: '/', label: 'Read more', iconAfter: 'ml-2 fa fa-angle-double-right' }],
    },
  ]
  public title = 'This is ui-hero'
  public description = 'A great component to use for headers or the homepage'
}
