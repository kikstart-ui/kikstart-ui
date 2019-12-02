import { Component } from '@angular/core';
import { UiService } from '@kikstart/ui';

@Component({
  template: `
    <ui-hero title="Style Guide" description="This is work in progress..."></ui-hero>
  `,
})
export class StyleGuideIndexComponent {
  constructor(private ui: UiService) {
    this.ui.setMetaData({ title: 'Style Guide' });
  }
}
