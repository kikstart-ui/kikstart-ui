import { Component } from '@angular/core'

@Component({
  templateUrl: './hero-simple.component.html',
})
export class HeroSimpleComponent {
  public title = 'This is ui-hero'
  public description = `A great component to use for headers or the homepage`
}
