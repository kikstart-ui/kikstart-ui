import { Component, OnInit } from '@angular/core';
import { appLayout } from '../../app.config';

import { UiCard, UiService } from '@kikstart/ui';
import { UiLink } from '@kikstart/ui';
import { UiBrand } from '@kikstart/ui';

@Component({
  template: `
    <ui-hero [brand]="brand" [description]="brand.description" [link]="link" [cards]="cards"></ui-hero>
  `,
})
export class HomeIndexComponent implements OnInit {
  brand: UiBrand = appLayout.brand;
  link: UiLink = {
    path: '/demo',
    label: 'Look at some demos',
    iconAfter: 'ml-2 fa fa-angle-double-right',
  };
  cards: UiCard[] = [
    {
      title: 'Demos',
      content: `Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam a maximus mi. Quisque justo
      nunc, sollicitudin euismod euismod at, tincidunt ut tellus. Vivamus rhoncus mattis varius.`,
      links: [
        {
          label: 'Show Demos',
          path: '/demo',
          iconAfter: 'ml-2 fa fa-angle-double-right',
        },
      ],
    },
    {
      title: 'Docs',
      content: `Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam a maximus mi. Quisque justo
      nunc, sollicitudin euismod euismod at, tincidunt ut tellus. Vivamus rhoncus mattis varius.`,
      links: [
        {
          label: 'Read Docs',
          path: '/docs',
          iconAfter: 'ml-2 fa fa-angle-double-right',
        },
      ],
    },
  ];
  constructor(private ui: UiService) {}

  ngOnInit() {
    this.ui.setMetaData({ title: 'Home' });
  }
}
