import { Component, OnInit } from '@angular/core';
import { UiService } from '@kikstart/ui';

import { DemoService } from '../services/demo.service';

@Component({
  template: `
    AUTH
  `,
})
export class DemoAuthComponent implements OnInit {
  constructor(public service: DemoService, public ui: UiService) {}

  ngOnInit() {
    this.ui.setMetaData({ title: 'Auth - Demo' });
  }
}
