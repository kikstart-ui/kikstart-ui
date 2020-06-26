import { Component } from '@angular/core'

@Component({
  templateUrl: './icon-simple.component.html',
})
export class IconSimpleComponent {
  public examples = [
    {
      label: 'Icon Size',
      icons: [
        { icon: 'bug', size: '1x' },
        { icon: 'bug', size: '2x' },
        { icon: 'bug', size: '3x' },
        { icon: 'bug', size: '4x' },
      ],
    },
    {
      label: 'Icon Spin',
      icons: [
        { icon: 'spinner', spin: true },
        { icon: 'sync', spin: true },
        { icon: 'circle-notch', spin: true },
        { icon: 'cog', spin: true },
      ],
    },
    {
      label: 'Icon Pulse',
      icons: [
        { icon: 'spinner', pulse: true },
        { icon: 'sync', pulse: true },
        { icon: 'circle-notch', pulse: true },
        { icon: 'cog', pulse: true },
      ],
    },
  ]
}
