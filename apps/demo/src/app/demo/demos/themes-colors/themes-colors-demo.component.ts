import { Component, ElementRef, ViewChild } from '@angular/core'
import { getColors } from '@kikstart-ui/themes'
import { DemoHelper } from '../../demo.helper'

@Component({
  templateUrl: './themes-colors-demo.component.html',
})
export class ThemesColorsDemoComponent {
  @ViewChild('main') main: ElementRef<HTMLElement>
  public colors = getColors()
  public selected = DemoHelper.rand(this.colors)

  selectColor(selected) {
    this.selected = selected
  }

  random() {
    this.selected = DemoHelper.rand(this.colors)
  }
}
