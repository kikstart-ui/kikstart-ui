import { Component } from '@angular/core'
import { getColorNames, getColors } from '@kikstart-ui/themes'
import { UiButton } from '@kikstart-ui/ui-button'
import { DemoHelper } from '../../demo.helper'

const preset = (color1, color2, direction = '90deg') => ({ color1, color2, direction })

@Component({
  templateUrl: './custom-gradients-demo.component.html',
})
export class CustomGradientsDemoComponent {
  public colors = getColors()
  public color1 = DemoHelper.rand(this.colors).name
  public color2 = DemoHelper.rand(this.colors).name

  public presets: UiButton[] = [
    ...getColorNames().reduce(
      (acc, col1) => [...acc, ...getColorNames().map((col2) => preset(col2 + '-700', col1 + '-900'))],
      [],
    ),
  ].map(({ color1, color2, direction }) => ({
    label: `${color1}-${color2}-${direction}`,
    payload: {
      backgroundImage: this.getClassName({ color1, color2, direction }),
    },
    handler: () => this.setPreset({ color1, color2, direction }),
  }))

  public buttons: UiButton[] = [
    { label: '45', handler: () => this.selectDirection('45deg') },
    { icon: 'fa-arrow-right', handler: () => this.selectDirection('to right') },
    { label: '135', handler: () => this.selectDirection('135deg') },
    { icon: 'fa-arrow-down', handler: () => this.selectDirection('to bottom') },
    { label: '225', handler: () => this.selectDirection('225deg') },
    { icon: 'fa-arrow-left', handler: () => this.selectDirection('to left') },
    { label: '317', handler: () => this.selectDirection('317deg') },
    { icon: 'fa-arrow-up', handler: () => this.selectDirection('to top') },
  ]
  public direction:
    | 'to left'
    | 'to right'
    | 'to top'
    | 'to bottom'
    | '45deg'
    | '90deg'
    | '135deg'
    | '225deg'
    | '270deg'
    | '317deg' = 'to right'

  public get backgroundStyle() {
    return {
      backgroundImage: this.getClassName({ color1: this.color1, color2: this.color2, direction: this.direction }),
    }
  }

  public selectColor1(color) {
    this.color1 = color
  }

  public selectColor2(color) {
    this.color2 = color
  }

  public selectDirection(direction) {
    this.direction = direction
  }

  public setPreset({ color1, color2, direction }) {
    this.color1 = color1
    this.color2 = color2
    this.direction = direction
  }

  public getClassName({ color1, color2, direction }) {
    return `linear-gradient(${direction}, var(--${color1}) 0%, var(--${color2}) 100%)`
  }
}
